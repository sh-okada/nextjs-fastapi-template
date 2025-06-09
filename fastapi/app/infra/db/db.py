from sqlmodel import Session, SQLModel, create_engine

from app.shared.env import DB

engine = create_engine(
    f"postgresql://{DB.USER}:{DB.PASSWORD}@{DB.HOST}:{DB.PORT}/{DB.NAME}",
)


def get_session():
    with Session(engine) as session:
        yield session


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
