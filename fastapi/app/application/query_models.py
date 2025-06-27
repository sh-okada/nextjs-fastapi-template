from dataclasses import dataclass


@dataclass(frozen=True)
class Grade:
    id: str
    name: str


@dataclass(frozen=True)
class Department:
    id: str
    name: str


@dataclass(frozen=True)
class Doc:
    id: str
    title: str
    text: str


@dataclass(frozen=True)
class DocCount:
    count: int
