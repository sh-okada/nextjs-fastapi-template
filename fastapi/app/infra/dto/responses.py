from pydantic import BaseModel


class User(BaseModel):
    id: str
    username: str


class UserWithAccessToken(User):
    access_token: str


class Grade(BaseModel):
    id: int
    name: str


class Department(BaseModel):
    id: int
    name: str
