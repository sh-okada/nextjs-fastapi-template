from fastapi import HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from app.depends import SessionDep, TokenDep
from app.infra.db import models
from app.infra.responses import UserResponse
from app.shared.jwt import decode_access_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login")


def get_current_user(token: TokenDep, session: SessionDep):
    token_data = decode_access_token(token)
    user = session.get(models.User, token_data.sub)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            headers={"WWW-Authenticate": "Bearer"},
        )
    return UserResponse(
        id=user.id,
        username=user.username,
    )
