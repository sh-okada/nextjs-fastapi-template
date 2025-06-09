from dataclasses import dataclass

from pydantic import BaseModel


@dataclass
class UserResponse(BaseModel):
    id: str
    username: str


@dataclass
class UserWithAccessTokenResponse(UserResponse):
    access_token: str


@dataclass(frozen=True)
class GradeResponse(BaseModel):
    id: int
    name: str


@dataclass(frozen=True)
class DepartmentResponse(BaseModel):
    id: int
    name: str
