from contextlib import asynccontextmanager

import jwt
from fastapi import APIRouter, FastAPI, Request, status
from fastapi.responses import JSONResponse
from pydantic import ValidationError
from sqlmodel import Session

from app.infrastructure.db import db_models
from app.infrastructure.db.db import create_db_and_tables, engine
from app.interface.router.auth_router import auth_router
from app.interface.router.departments_router import departments_router
from app.interface.router.docs_router import docs_router
from app.interface.router.grades_router import grades_router
from app.interface.router.users_router import users_router

docs = [
    db_models.Doc(title="ドキュメント1", text="## Hello, World"),
    db_models.Doc(title="ドキュメント2", text="## Hello, World"),
    db_models.Doc(title="ドキュメント3", text="## Hello, World"),
    db_models.Doc(title="ドキュメント4", text="## Hello, World"),
    db_models.Doc(title="ドキュメント5", text="## Hello, World"),
    db_models.Doc(title="ドキュメント6", text="## Hello, World"),
    db_models.Doc(title="ドキュメント7", text="## Hello, World"),
    db_models.Doc(title="ドキュメント8", text="## Hello, World"),
    db_models.Doc(title="ドキュメント9", text="## Hello, World"),
    db_models.Doc(title="ドキュメント10", text="## Hello, World"),
    db_models.Doc(title="ドキュメント11", text="## Hello, World"),
    db_models.Doc(title="ドキュメント12", text="## Hello, World"),
    db_models.Doc(title="ドキュメント13", text="## Hello, World"),
    db_models.Doc(title="ドキュメント14", text="## Hello, World"),
    db_models.Doc(title="ドキュメント15", text="## Hello, World"),
    db_models.Doc(title="ドキュメント16", text="## Hello, World"),
]

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
        session.add_all([*grades, *departments, *docs])
        session.commit()


def delete_dummy_data():
    with Session(engine) as session:
        for model in [*grades, *departments, *docs]:
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
api_router.include_router(docs_router)

app.include_router(api_router)


@app.exception_handler(ValidationError)
def validation_error_handler(request: Request, exc: ValidationError):
    return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content=None)


@app.exception_handler(jwt.PyJWTError)
def py_jwt_error_handler(request: Request, exc: jwt.PyJWTError):
    return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content=None)
