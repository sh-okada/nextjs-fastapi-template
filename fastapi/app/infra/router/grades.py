from typing import List

from fastapi import APIRouter

from app.infra.query_service.grade_query_service import GradeQueryServiceDep
from app.infra.router import responses

grades_router = APIRouter(prefix="/grades", tags=["grades"])


@grades_router.get("", response_model=List[responses.GradeResponse])
def get_grades(grade_query_service: GradeQueryServiceDep):
    return grade_query_service.get_grades()
