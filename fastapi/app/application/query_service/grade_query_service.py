import abc
from typing import List

from app.application import query_models


class IGradeQueryService(abc.ABC):
    @abc.abstractmethod
    def get_grades(self) -> List[query_models.Grade]:
        raise NotImplementedError()
