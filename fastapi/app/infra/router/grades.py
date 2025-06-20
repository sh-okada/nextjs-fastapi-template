from typing import List

from fastapi import APIRouter

from app.infra.dto import responses
from app.infra.query_service.grade_query_service import GradeQueryServiceDep

grades_router = APIRouter(prefix="/grades", tags=["grades"])


@grades_router.get("", response_model=List[responses.Grade])
def get_grades(grade_query_service: GradeQueryServiceDep):
    return grade_query_service.get_grades()
