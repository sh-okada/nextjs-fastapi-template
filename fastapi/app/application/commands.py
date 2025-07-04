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
class PostDoc:
    title: str
    text: str


@dataclass(frozen=True)
class GetDocs:
    page: int
    limit: int


@dataclass(frozen=True)
class GetDoc:
    id: str
