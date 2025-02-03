# Étape 1 : Utiliser une image Node.js
FROM node:18-alpine


# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers de l'application
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste des fichiers
COPY . .

# Étape 6 : Exposer le port du frontend
EXPOSE 5173

# Étape 7 : Démarrer l'application React
CMD ["npm", "run", "dev"]
