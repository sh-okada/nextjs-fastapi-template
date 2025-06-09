from contextlib import asynccontextmanager

from fastapi import APIRouter, FastAPI
from sqlmodel import Session

from app.infra.db import db_models
from app.infra.db.db import create_db_and_tables, engine
from app.infra.router.auth import auth_router
from app.infra.router.departments import departments_router
from app.infra.router.grades import grades_router
from app.infra.router.users import users_router

grades = [
    db_models.Grade(name="S1"),
    db_models.Grade(name="S2"),
    db_models.Grade(name="S3"),
    db_models.Grade(name="S4"),
    db_models.Grade(name="M1"),
    db_models.Grade(name="M2"),
    db_models.Grade(name="M3"),
    db_models.Grade(name="M4"),
]

departments = [
    db_models.Department(name="社内DX推進部"),
    db_models.Department(name="開発センター"),
    db_models.Department(name="営業システム改良プロジェクト"),
]


def insert_dummy_data():
    with Session(engine) as session:
        session.add_all([*grades, *departments])
        session.commit()


def delete_dummy_data():
    with Session(engine) as session:
        for model in [*grades, *departments]:
            session.delete(model)
        session.commit()


@asynccontextmanager
async def lifespan(_: FastAPI):
    create_db_and_tables()
    insert_dummy_data()
    yield
    delete_dummy_data()


app = FastAPI(lifespan=lifespan)

api_router = APIRouter(prefix="/api")

api_router.include_router(auth_router)
api_router.include_router(users_router)
api_router.include_router(departments_router)
api_router.include_router(grades_router)

app.include_router(api_router)
