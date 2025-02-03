from fastapi import APIRouter
from app.schemas import ChatRequest, ChatResponse
from app.model import get_llm_response

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    print(f"Requête reçue : {request}")
    response = get_llm_response(request.question)
    return ChatResponse(answer=response)



