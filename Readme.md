## Installation

```bash
git init
git clone --branch master --single-branch https://github.com/Keloce-2005/Projet_docker.git
cd Projet_docker
docker-compose up --build
```

## Accès à l'application
- Frontend : http://localhost:3000
- Backend API : http://localhost:5000/api/todos

## Tester
- Ajouter une tâche via le formulaire
- Vérifier la persistance après `docker-compose down` et `docker-compose up`

## Architecture Docker
- `frontend` (React)
- `backend` (Node.js/Express)
- `db` (PostgreSQL)
- Réseau : communication sécurisée via `todo-network`
- Volume : persistance de la DB via `db_data`
