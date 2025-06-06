from dataclasses import dataclass


@dataclass
class UserResponse:
    id: str
    username: str


@dataclass
class UserWithAccessTokenResponse(UserResponse):
    access_token: str
