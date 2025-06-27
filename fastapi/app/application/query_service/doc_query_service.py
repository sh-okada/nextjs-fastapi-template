import abc

from app.application import commands, query_models


class IDocQueryService(abc.ABC):
    @abc.abstractmethod
    def get_doc_count(self) -> query_models.DocCount:
        raise NotImplementedError()

    @abc.abstractmethod
    def get_docs(self, get_docs_command: commands.GetDocs) -> list[query_models.Doc]:
        raise NotImplementedError()

    def get_doc(self, get_doc_command: commands.GetDoc) -> query_models.Doc:
        raise NotImplementedError()
