from fastapi import FastAPI

app = FastAPI()




@app.get("/")
async def root():
    return { "message": "Hello World" }

@app.get("/bebra")
async def root():
    return { "message": "Hello World" }
