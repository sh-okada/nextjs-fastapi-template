from typing import Annotated

from fastapi import Depends
from sqlmodel import func, select

from app.application import commands, query_models
from app.application.query_service.doc_query_service import IDocQueryService
from app.infrastructure.db import db_models
from app.infrastructure.db.db import SessionDep


class DocQueryService(IDocQueryService):
    def __init__(self, session: SessionDep):
        self.__session = session

    def get_doc_count(self) -> query_models.DocCount:
        statement = select(func.count(db_models.Doc.id))
        count = self.__session.exec(statement).one()

        return query_models.DocCount(count)

    def get_docs(self, get_docs_command: commands.GetDocs) -> list[query_models.Doc]:
        offset = (get_docs_command.page - 1) * get_docs_command.limit
        statement = select(db_models.Doc).offset(offset).limit(get_docs_command.limit)
        docs = self.__session.exec(statement).all()

        return [query_models.Doc(doc.id, doc.title, doc.text) for doc in docs]

    def get_doc(self, get_doc_command: commands.GetDoc) -> query_models.Doc:
        doc = self.__session.get_one(db_models.Doc, get_doc_command.id)

        return query_models.Doc(doc.id, doc.title, doc.text)


DocQueryServiceDep = Annotated[DocQueryService, Depends()]
