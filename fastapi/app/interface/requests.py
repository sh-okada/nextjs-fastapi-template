from datetime import date

from pydantic import BaseModel, Field, SecretStr


class SignUp(BaseModel):
    username: str = Field(..., min_length=2, max_length=8)
    password: SecretStr = Field(..., min_length=8, max_length=100)


class PostProfile(BaseModel):
    joining_date: date = Field(...)
    years: int = Field(..., min=1, max=100)
    department_id: str = Field(..., min_length=1, max_length=100)
    grade_id: str = Field(..., min_length=1, max_length=100)
