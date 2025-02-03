from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import router

# Initialize the FastAPI app
app = FastAPI(title="AI Chat API")

# Add CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow requests from your frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Include your router (which contains the routes, like /chat)
app.include_router(router)

@app.get("/")
async def root():
    return {"message": "Welcome to TinyLlama API"}
