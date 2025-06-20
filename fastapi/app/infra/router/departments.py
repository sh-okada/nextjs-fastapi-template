import time
from typing import List

from fastapi import APIRouter

from app.infra.dto import responses
from app.infra.query_service.department_query_service import DepartmentQueryServiceDep

departments_router = APIRouter(prefix="/departments", tags=["departments"])


@departments_router.get("", response_model=List[responses.Department])
def get_departments(
    department_query_service: DepartmentQueryServiceDep,
):
    time.sleep(1)
    return department_query_service.get_departments()
