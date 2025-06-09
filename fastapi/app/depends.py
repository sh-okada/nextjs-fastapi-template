from typing import Annotated

from fastapi import Depends
from sqlmodel import Session

from app.infra import responses
from app.infra.db.db import get_session
from app.shared.oauth2 import get_current_user, oauth2_scheme

# OAuth2
SessionDep = Annotated[Session, Depends(get_session)]
TokenDep = Annotated[str, Depends(oauth2_scheme)]
CurrentUserDep = Annotated[responses.UserResponse, Depends(get_current_user)]
