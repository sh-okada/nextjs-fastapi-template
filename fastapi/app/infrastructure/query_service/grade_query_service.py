from typing import Annotated, List

from fastapi import Depends
from sqlmodel import select

from app.application import query_models
from app.application.query_service.grade_query_service import IGradeQueryService
from app.infrastructure.db import db_models
from app.infrastructure.db.db import SessionDep


class GradeQueryService(IGradeQueryService):
    def __init__(self, session: SessionDep):
        self.__session = session

    def get_grades(self) -> List[query_models.Grade]:
        statement = select(db_models.Grade)
        grades = self.__session.exec(statement).all()

        return [
            query_models.Grade(id=str(grade.id), name=grade.name) for grade in grades
        ]


GradeQueryServiceDep = Annotated[GradeQueryService, Depends()]
