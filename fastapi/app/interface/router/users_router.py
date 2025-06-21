from fastapi import APIRouter, Response, status

from app.application import commands
from app.application.use_case.post_profile_use_case import PostProfileUseCaseDep
from app.interface import requests, responses
from app.shared.oauth2 import CurrentUserDep

users_router = APIRouter(prefix="/users", tags=["users"])


@users_router.get("/me", response_model=responses.User)
def read_users_me(
    current_user: CurrentUserDep,
):
    return current_user


@users_router.post("/me/profile")
def post_profile(
    post_profile_request: requests.PostProfile,
    current_user: CurrentUserDep,
    post_profile_use_case: PostProfileUseCaseDep,
):
    post_profile_command = commands.PostProfile(
        current_user.id,
        post_profile_request.joining_date,
        post_profile_request.years,
        post_profile_request.department_id,
        post_profile_request.grade_id,
    )

    post_profile_use_case.execute(post_profile_command)

    return Response(status_code=status.HTTP_201_CREATED)
