from typing import Annotated

from fastapi import Depends

from app.domain.repository.profile_repository import IProfileRepository
from app.infrastructure.db import db_models
from app.infrastructure.db.db import SessionDep


class ProfileRepository(IProfileRepository):
    def __init__(self, session: SessionDep):
        self.__session = session

    def create(self, profile):
        user_profile = db_models.UserProfile(
            user_id=str(profile.user_id),
            grade_id=str(profile.grade_id),
            department_id=str(profile.department_id),
        )

        self.__session.add(user_profile)
        self.__session.commit()


ProfileRepositoryDep = Annotated[ProfileRepository, Depends()]
