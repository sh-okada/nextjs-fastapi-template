from typing import Annotated, List

from fastapi import Depends
from sqlmodel import select

from app.infra.db import db_models
from app.infra.db.db import SessionDep
from app.infra.dto import query_models


class DepartmentQueryService:
    def __init__(self, session: SessionDep):
        self.__session = session

    def get_departments(self) -> List[query_models.Department]:
        statement = select(db_models.Department)
        departments = self.__session.exec(statement).all()

        return [
            query_models.Department(id=department.id, name=department.name)
            for department in departments
        ]


DepartmentQueryServiceDep = Annotated[DepartmentQueryService, Depends()]
