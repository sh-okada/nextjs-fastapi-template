import uuid
from typing import Annotated

from fastapi import Depends

from app.domain.repository.profile_repository import IProfileRepository
from app.infrastructure.db import db_models
from app.infrastructure.db.db import SessionDep


class ProfileRepository(IProfileRepository):
    def __init__(self, session: SessionDep):
        self.__session = session

    def create(self, profile):
        current_user_profile = self.__get_current_user_profile(profile.user_id.root)
        if current_user_profile:
            self.__session.delete(current_user_profile)

        user_profile = db_models.UserProfile(
            user_id=profile.user_id.root,
            years=profile.years.root,
            joining_date=profile.joining_date.root,
            grade_id=profile.grade_id.root,
            department_id=profile.department_id.root,
        )

        self.__session.add(user_profile)
        self.__session.commit()

    def __get_current_user_profile(
        self, user_id: uuid.UUID
    ) -> db_models.UserProfile | None:
        return self.__session.get(db_models.UserProfile, user_id)


ProfileRepositoryDep = Annotated[ProfileRepository, Depends()]
