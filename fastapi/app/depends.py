from typing import Annotated

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session

from app.infra import responses
from app.infra.db import models
from app.infra.db.db import get_session
from app.shared.jwt import decode_access_token


SessionDep = Annotated[Session, Depends(get_session)]

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login")
TokenDep = Annotated[str, Depends(oauth2_scheme)]


async def get_current_user(token: TokenDep, session: SessionDep):
    token_data = decode_access_token(token)
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


CurrentUserDep = Annotated[responses.UserResponse, Depends(get_current_user)]
