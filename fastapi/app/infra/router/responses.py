from dataclasses import dataclass

from pydantic import BaseModel


class UserResponse(BaseModel):
    id: str
    username: str


class UserWithAccessTokenResponse(UserResponse):
    access_token: str


class GradeResponse(BaseModel):
    id: int
    name: str


class DepartmentResponse(BaseModel):
    id: int
    name: str
