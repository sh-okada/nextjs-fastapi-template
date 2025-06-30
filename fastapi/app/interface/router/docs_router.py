from fastapi import APIRouter

from app.application import commands
from app.infrastructure.query_service.doc_query_service import DocQueryServiceDep
from app.interface import requests, responses

docs_router = APIRouter(prefix="/docs")


@docs_router.get("/count", response_model=responses.DocCount)
def get_doc_count(doc_query_service: DocQueryServiceDep):
    return doc_query_service.get_doc_count()


@docs_router.get("", response_model=list[responses.Doc])
def get_docs(
    doc_filter_query: requests.DocFilterQuery, doc_query_service: DocQueryServiceDep
):
    return doc_query_service.get_docs(doc_filter_query)


@docs_router.get("/{id}", response_model=responses.Doc)
def get_doc(id: str, doc_query_service: DocQueryServiceDep):
    doc_id_path_param = requests.DocIdPathParam(doc_id=id)

    return doc_query_service.get_doc(commands.GetDoc(doc_id_path_param.doc_id))
