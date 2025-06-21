from pydantic import BaseModel


class User(BaseModel):
    id: str
    username: str


class UserWithAccessToken(User):
    access_token: str


class Grade(BaseModel):
    id: str
    name: str


class Department(BaseModel):
    id: str
    name: str
