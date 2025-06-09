from fastapi import APIRouter

from app.depends import CurrentUserDep


users_router = APIRouter(prefix="/users", tags=["users"])


@users_router.get("/me")
async def read_users_me(
    current_user: CurrentUserDep,
):
    return current_user
