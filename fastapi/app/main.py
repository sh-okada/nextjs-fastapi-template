from contextlib import asynccontextmanager

from fastapi import APIRouter, FastAPI

from app.infra.db.db import create_db_and_tables
from app.infra.router.auth import auth_router
from app.infra.router.users import users_router


@asynccontextmanager
async def lifespan(_: FastAPI):
    create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)

api_router = APIRouter(prefix="/api")

api_router.include_router(auth_router)
api_router.include_router(users_router)

app.include_router(api_router)
