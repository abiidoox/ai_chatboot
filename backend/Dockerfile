FROM python:3.10

# Install Ollama and dependencies
RUN curl -sSL https://ollama.com/install.sh | bash
RUN export PATH=$PATH:/root/.local/bin
# RUN ollama pull tinyllama


# Continue with the rest of your setup
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
