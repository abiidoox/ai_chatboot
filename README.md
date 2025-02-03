# AI Chatbot - FastAPI + TinyLlama + React

## Description
Ce projet implémente une interface de chatbot alimentée par un modèle de langage local (TinyLlama). L'application est constituée d'un backend en **FastAPI** qui communique avec un modèle TinyLlama, et d'un frontend en **React** qui affiche les réponses de l'IA en temps réel.

Le projet utilise **Docker** pour la containerisation, ce qui permet un déploiement facile et un environnement reproductible.

## Prérequis

Avant de commencer, assurez-vous que les outils suivants sont installés sur votre machine :

- **Docker** : Pour exécuter les conteneurs.
- **Git** : Pour cloner le dépôt.
- **Node.js** et **npm** (ou **yarn**) : Pour exécuter le frontend React.
- **Python 3.x** : Pour exécuter le backend FastAPI.

## Installation

### 1. Cloner le dépôt

Clonez le projet à partir de GitHub :

```bash
git clone https://github.com/abiidoox/ai_chatboot.git
cd ai_chatboot
2. Lancer les services avec Docker pour le backend 
3. Lancer les services avec Docker pour le frontend 
Ce projet utilise Docker et Docker Compose pour orchestrer les services backend et frontend. Suivez ces étapes pour tout configurer et démarrer l'application :

a. Construire et démarrer les conteneurs
Dans le dossier racine du projet, exécutez la commande suivante pour construire les images et démarrer les services (frontend et backend) :


docker-compose up --build
Cela va :

Construire le backend FastAPI avec TinyLlama comme modèle.
Construire le frontend React.
Démarrer tous les services dans des conteneurs Docker séparés.
b. Vérifiez les ports
Une fois les services lancés, vous pourrez accéder à :

Le frontend via http://localhost:5173.
Le backend via http://localhost:8000.
3. Accéder à l'application
Ouvrez un navigateur et accédez à http://localhost:5173 pour interagir avec l'interface de chat.
Posez une question dans le chat et l'API renverra la réponse générée par le modèle de langage TinyLlama.
Fonctionnalités
Frontend (React) : Interface de chat simple où l'utilisateur peut poser des questions.
Backend (FastAPI) : API qui prend la question de l'utilisateur, la passe à TinyLlama et renvoie la réponse.
Docker : Containerisation de l'application pour un environnement reproductible.
Technologies utilisées
Frontend : React, Axios (pour faire des appels HTTP)
Backend : FastAPI, TinyLlama (modèle de langage local)
Containerisation : Docker, Docker Compose
Exemple d'utilisation
Entrée Utilisateur
Question : "How does AI work?"

Réponse de l'IA
Réponse : "AI works by using algorithms and models trained on large datasets to recognize patterns and make predictions."

Étapes pour tester le projet
1. Lancer le projet avec Docker
Comme indiqué dans la section précédente, utilisez la commande suivante pour démarrer tous les services avec Docker :


docker-compose up --build
2. Tester le frontend
Ouvrez un navigateur et accédez à http://localhost:5173.
Vous verrez une interface de chat où vous pouvez poser des questions.
Testez avec des questions comme "What is AI?" ou "How does AI work?" et assurez-vous que l'IA répond correctement.
3. Tester le backend
Ouvrez un terminal et utilisez un outil comme Postman ou curl pour envoyer une requête POST à l'API backend.

URL : http://localhost:8000/chat

Corps de la requête :


{
  "question": "How does AI work?"
}
Vous devriez recevoir une réponse similaire à celle-ci :


{
  "response": "AI works by using algorithms and models trained on large datasets to recognize patterns and make predictions."
}
4. Tester la performance de l'API
Envoyez plusieurs requêtes successives pour vérifier la réactivité de l'API et la gestion des requêtes concurrentes.

5. Tester l'intégration frontend-backend
Lancez le frontend, posez une question, et vérifiez que la réponse est correctement affichée sur l'interface de chat.

Déploiement
Si vous souhaitez déployer ce projet, vous pouvez suivre ces étapes :

1. Déployer avec Docker sur un serveur distant
Vous pouvez déployer l'application sur un serveur distant via Docker, en suivant ces étapes :

Installer Docker sur votre serveur.
Copier le projet sur le serveur distant.
Exécuter docker-compose up --build sur le serveur pour démarrer l'application.


