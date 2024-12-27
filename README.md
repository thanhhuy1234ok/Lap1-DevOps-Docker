
# **Project Name**

## **Table of Contents**
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## **Introduction**
This project is a full-stack web application using:
- **Backend**: Express.js for the REST API.
- **Frontend**: React.js with Vite for faster development and production builds.
- **Docker**: To containerize both frontend and backend for consistent deployment.

---

## **Technologies Used**
- **Node.js** (v16+)
- **Express.js**
- **React.js** (with Vite)
- **MongoDB**
- **Docker** & **Docker Compose**

---

## **Project Structure**
```
project/
├── backend/                  # Backend service
│   ├── package.json          # Backend dependencies
│   ├── index.js             # Main server file
|   ├── Dockerfile        # Dockerfile for backend
├── frontend/                 # Frontend service
│   ├── package.json          # Frontend dependencies
│   ├── src/                  # React components
│   ├── vite.config.js        # Vite configuration
|   ├── Dockerfile       # Dockerfile for frontend
├── docker-compose.yml        # Docker Compose configuration
├── README.md                 # Project documentation
```

---

## **Installation**

### Prerequisites
1. Install [Docker](https://www.docker.com/products/docker-desktop).
2. Install [Node.js](https://nodejs.org/) (if you want to run locally without Docker).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/thanhhuy1234ok/Lap1-DevOps-Docker.git
   cd Lap1-DevOps-Docker
   ```

2. Build and run the services with Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Backend: [http://localhost:8080](http://localhost:8080)
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - MongoDB: Accessible at `localhost:27017` (for development).

---

## **Usage**

### Running Locally Without Docker

#### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   npm install
   npm start
   ```
2. The backend server will run on [http://localhost:5000](http://localhost:8080).

#### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
2. The React app (with Vite) will run on [http://localhost:5173](http://localhost:5173).

---

## **API Endpoints**

### **Base URL**: `http://localhost:8080`

| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| GET    | `/`               | Test endpoint               |
| GET    | `/products`       | Fetch all products          |
| POST   | `/products`       | Create a new product         |


---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

