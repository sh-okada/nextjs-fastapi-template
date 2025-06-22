import abc
from typing import List

from app.application import query_models


class IDepartmentQueryService(abc.ABC):
    @abc.abstractmethod
    def get_departments(self) -> List[query_models.Department]:
        raise NotImplementedError()
