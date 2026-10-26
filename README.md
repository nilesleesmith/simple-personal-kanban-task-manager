# Personal Kanban Task Manager

This application follows the Passport and database structure from `savage-auth`. Users can sign up, log in, and create, view, edit, move, and delete their own tasks in a three-column Kanban board.

## Configure MongoDB Atlas

Create a file named `atlas-credentials.env` in this folder. Use the connection details provided by MongoDB Atlas:

```dotenv
MONGODB_USERNAME="your_database_username"
MONGODB_PASSWORD="your_database_password"
MONGODB_URI="mongodb+srv://your_database_username:your_url_encoded_password@your_cluster_host/?retryWrites=true&w=majority"
```

Use your real cluster host and credentials. URL-encode reserved characters in the password. The application reads `MONGODB_URI`; it does not use the username and password variables separately. The application explicitly selects `personal_kanban_task_manager` through `config/database.js`, so the URI does not need to specify the database path.

Do not commit `atlas-credentials.env`. The `.gitignore` file excludes environment files and `node_modules`.

## Start the application

Run these commands from this folder:

```powershell
npm install
npm start
```

The start script loads `atlas-credentials.env` with Node.js's built-in `--env-file` option. The application connects to MongoDB Atlas, not a local MongoDB server. The server starts listening only after the database connection succeeds.

Open http://localhost:3001.

## CRUD

- Create: add a task.
- Read: view tasks on the Kanban board.
- Update: edit a task title or move it between To Do, In Progress, and Done. Only those three task statuses are accepted.
- Delete: delete a task.

Each task query is scoped to the logged-in user's account.
