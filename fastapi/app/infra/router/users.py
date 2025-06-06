from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from app.infra import responses
from app.infra.db import models
from app.infra.db.db import SessionDep
from app.shared.jwt import decode_access_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login")
users_router = APIRouter(prefix="/users", tags=["users"])


async def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)], session: SessionDep
):
    token_data = decode_access_token(token)
    print(token_data.sub)
    user = session.get(models.User, token_data.sub)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            headers={"WWW-Authenticate": "Bearer"},
        )
    return responses.UserResponse(
        id=user.id,
        username=user.username,
    )


@users_router.get("/me")
async def read_users_me(
    current_user: Annotated[responses.UserResponse, Depends(get_current_user)],
):
    return current_user
