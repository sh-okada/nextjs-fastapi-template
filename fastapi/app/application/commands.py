from dataclasses import dataclass
from datetime import date


@dataclass(frozen=True)
class PostProfile:
    user_id: str
    joining_date: date
    years: int
    department_id: str
    grade_id: str


@dataclass
class GetDocs:
    page: int
    limit: int


@dataclass
class GetDoc:
    id: str
