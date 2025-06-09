from typing import Annotated, List

from fastapi import Depends
from sqlmodel import select

from app.infra.db import db_models
from app.infra.db.db import SessionDep
from app.infra.query_service import query_models


class GradeQueryService:
    def __init__(self, session: SessionDep):
        self.__session = session

    def get_grades(self) -> List[query_models.Grade]:
        statement = select(db_models.Grade)
        grades = self.__session.exec(statement).all()

        return [query_models.Grade(id=grade.id, name=grade.name) for grade in grades]


GradeQueryServiceDep = Annotated[GradeQueryService, Depends()]
