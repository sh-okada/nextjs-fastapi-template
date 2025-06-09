from typing import List

from fastapi import APIRouter

from app.infra.query_service.department_query_service import DepartmentQueryServiceDep
from app.infra.router import responses

departments_router = APIRouter(prefix="/departments", tags=["departments"])


@departments_router.get("", response_model=List[responses.DepartmentResponse])
def get_departments(
    department_query_service: DepartmentQueryServiceDep,
):
    return department_query_service.get_departments()
