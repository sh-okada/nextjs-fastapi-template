import uuid
from datetime import date
from typing import List

from sqlmodel import Field, Relationship, SQLModel


class Grade(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str = Field(nullable=False)

    user_profiles: List["UserProfile"] = Relationship(back_populates="grade")


class Department(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str = Field(nullable=False)

    teams: List["Team"] = Relationship(back_populates="department")
    user_profiles: List["UserProfile"] = Relationship(back_populates="department")


class Team(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str = Field(nullable=False)
    department_id: uuid.UUID = Field(default=None, foreign_key="department.id")

    department: "Department" = Relationship(back_populates="teams")


class User(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    username: str = Field(index=True, unique=True, nullable=False)
    password: str = Field(nullable=False)

    user_profile: "UserProfile" = Relationship(back_populates="user")


class UserProfile(SQLModel, table=True):
    user_id: uuid.UUID = Field(primary_key=True, foreign_key="user.id")
    years: int = Field(nullable=False)
    joining_date: date = Field(nullable=False)
    grade_id: uuid.UUID = Field(nullable=False, foreign_key="grade.id")
    department_id: uuid.UUID = Field(nullable=False, foreign_key="department.id")

    user: "User" = Relationship(
        sa_relationship_kwargs={"uselist": False}, back_populates="user_profile"
    )
    grade: "Grade" = Relationship(back_populates="user_profiles")
    department: "Department" = Relationship(back_populates="user_profiles")
