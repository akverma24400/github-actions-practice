# Todo List App

This is a simple todo list application built using Node.js, Express, EJS and PostgreSQL.

## Prerequisites

- Node.js installed
- PostgreSQL installed

# Getting Started

1. Clone this repository to your local machine.
2. Create a new PostgreSQL database and update the .env file with the correctcredentials.
3. Run npm install to install the necessary dependencies.
4. Run npm start to start the application.
5. Open your web browser and navigate to http://localhost:3000 to view the todo list.

# Features

- Add new items to the list
- Edit existing items
- Delete items
- View all items in the list
- *New*: Add Daily, Monthly, Yearly lists. You can add tasks that need to be completed.

# Technologies Used

- Node.js
- Express
- PostgreSQL
- EJS (Embedded JavaScript) templates
- Body-parser middleware

# Code Structure

The code for this application is structured as follows:

- index.js: The main entry point for the application. This file sets up the Express server and connects to the PostgreSQL database.

- views/: A directory containing the EJS templates used to render the HTML for the application.

- public/: A directory containing static assets such as CSS and JavaScript files.

# Database Schema

The application uses Two database tables called items and time_table. Tables are linked with a one to many relationship with a forigen key.

# Deployment Preview

![Main](public/screenshots/Preview.jpg)
----
![Change List Feature](<public/screenshots/Change List.jpg>)
----
![Yearly List](<public/screenshots/Yearly List.jpg>)

# Todo List Application

A simple Todo List web application built with Node.js, Express, EJS, and PostgreSQL. Users can add and manage tasks based on duration categories.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Docker
- Docker Compose

## Run with Docker Compose

### 1. Clone the repository

```bash
git clone <your-github-repository-link>
cd todo-list-app
```

### 2. Start the application

```bash
docker compose up -d --build
```

### 3. Open the application

Visit:

```text
http://localhost:3000
```

For an EC2 deployment, replace `localhost` with your EC2 public IP:

```text
http://<EC2-PUBLIC-IP>:3000
```

## Stop the Application

```bash
docker compose down
```

## View Logs

```bash
docker compose logs -f app
```

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `DB_HOST` | PostgreSQL hostname inside Docker network | `db` |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_NAME` | Database name | `todo_db` |
| `DB_USER` | PostgreSQL username | `postgres` |
| `DB_PASSWORD` | PostgreSQL password | `postgres` |
| `POSTGRES_DB` | Database created by PostgreSQL container | `todo_db` |
| `POSTGRES_USER` | PostgreSQL container username | `postgres` |
| `POSTGRES_PASSWORD` | PostgreSQL container password | `postgres` |

## Docker Hub Image

```text
https://hub.docker.com/r/akash24400/todo-list-app
```

# Acknowledgements

This project was inspired by various tutorials and resources available online. Special thanks to the creators of those resources.


