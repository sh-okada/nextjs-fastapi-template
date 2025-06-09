from dataclasses import dataclass


@dataclass(frozen=True)
class Grade:
    id: int
    name: str


@dataclass(frozen=True)
class Department:
    id: int
    name: str
