from fastapi import FastAPI;
from fastapi.middleware.cors import CORSMiddleware;
from server.functions import get_fibonacci;
from server.models import FibonacciModel;

app = FastAPI()

# CORS Politicies
origins = ["*"] # web app server
app.add_middleware(
  CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
@app.get("/")
async def root():
    return {"message": "Página inicial do case XPInc [Assistente de MLOps]"}

@app.get("/api/health")
async def read_health():
    return {"value": "Estou saudável!"}

@app.post("/api/fibonacci")
async def post_fibonacci(request: FibonacciModel):
    return {
        "message": f"Número de elementos solicitados: {request.elements}",
        "value": get_fibonacci(request.elements)
    }