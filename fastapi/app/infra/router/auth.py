import uuid
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlmodel import select

from app.infra.db import db_models
from app.infra.db.db import SessionDep
from app.infra.router import requests, responses
from app.shared import password
from app.shared.jwt import create_access_token

auth_router = APIRouter(prefix="/auth", tags=["auth"])


@auth_router.post("/login", response_model=responses.UserWithAccessTokenResponse)
def login(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()], session: SessionDep
):
    statement = select(db_models.User).where(
        db_models.User.username == form_data.username,
    )
    user = session.exec(statement).one_or_none()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
        )

    if not password.verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
        )

    access_token = create_access_token(user.id)

    return responses.UserWithAccessTokenResponse(
        id=user.id,
        username=user.username,
        access_token=access_token,
    )


@auth_router.post("/signup")
def signUp(form_data: requests.SignUpRequest, session: SessionDep):
    statement = select(db_models.User).where(
        db_models.User.username == form_data.username,
    )
    user = session.exec(statement).one_or_none()
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
        )

    user = db_models.User(
        id=str(uuid.uuid4()),
        username=form_data.username,
        password=password.get_password_hash(form_data.password.get_secret_value()),
    )

    session.add(user)
    session.commit()
