# Utilisez une image Python de base
FROM python:3.8-slim

# Install dependencies
RUN apt-get update && apt-get install -y libmysqlclient-dev

# Créez et définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers de votre application dans le conteneur
COPY . /app

# Installez les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Exposez le port sur lequel FastAPI s'exécute
EXPOSE 8000

# Commande pour exécuter l'application FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
