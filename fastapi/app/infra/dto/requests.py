from pydantic import BaseModel, Field, SecretStr


class SignUp(BaseModel):
    username: str = Field(..., min_length=2, max_length=8)
    password: SecretStr = Field(..., min_length=8, max_length=100)
