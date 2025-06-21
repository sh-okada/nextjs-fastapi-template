from typing import Annotated

from fastapi import Depends

from app.application import commands
from app.domain.entity.profile import Profile
from app.infrastructure.repository.profile_repository import ProfileRepositoryDep


class PostProfileUseCase:
    def __init__(self, profile_repository: ProfileRepositoryDep):
        self.__profile_repository = profile_repository

    def execute(self, post_profile_command: commands.PostProfile):
        profile = Profile(
            user_id=post_profile_command.user_id,
            joining_date=post_profile_command.joining_date,
            years=post_profile_command.years,
            department_id=post_profile_command.department_id,
            grade_id=post_profile_command.grade_id,
        )

        self.__profile_repository.create(profile)


PostProfileUseCaseDep = Annotated[PostProfileUseCase, Depends()]
