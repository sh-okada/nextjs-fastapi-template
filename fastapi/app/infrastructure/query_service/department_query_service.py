from typing import Annotated, List

from fastapi import Depends
from sqlmodel import select

from app.application import query_models
from app.application.query_service.department_query_service import (
    IDepartmentQueryService,
)
from app.infrastructure.db import db_models
from app.infrastructure.db.db import SessionDep


class DepartmentQueryService(IDepartmentQueryService):
    def __init__(self, session: SessionDep):
        self.__session = session

    def get_departments(self) -> List[query_models.Department]:
        statement = select(db_models.Department)
        departments = self.__session.exec(statement).all()

        return [
            query_models.Department(id=str(department.id), name=department.name)
            for department in departments
        ]


DepartmentQueryServiceDep = Annotated[DepartmentQueryService, Depends()]
