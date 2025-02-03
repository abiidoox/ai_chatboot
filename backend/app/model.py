import ollama

def get_llm_response(question: str) -> str:
    model = "tinyllama"  # Modèle utilisé
    response = ollama.chat(model=model, messages=[{"role": "user", "content": question}])
    return response["message"]["content"]
# import os
# import requests

# OLLAMA_API_URL = os.getenv("OLLAMA_API_URL", "http://localhost:11434")

# def get_ollama_response(question: str):
#     response = requests.post(
#         f"{OLLAMA_API_URL}/chat",
#         json={"messages": [{"role": "user", "content": question}]},
#     )
#     return response.json()
