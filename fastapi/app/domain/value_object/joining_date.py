from pydantic import Field, PastDate, RootModel


class JoiningDate(RootModel, frozen=True):
    root: PastDate = Field(...)
