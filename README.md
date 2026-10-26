# Simple Personal Kanban Task Manager

A personal Kanban board where authenticated users can create, organize, edit, and delete their own tasks.

## Overview

Simple Personal Kanban Task Manager is an authenticated CRUD application built with Node.js, Express, EJS, Passport, and MongoDB.

Users can sign up, log in, create tasks, edit task titles, and move tasks between **To Do**, **In Progress**, and **Done**. Task queries are scoped to the authenticated user's account so each user manages only their own board.

## Features

- Create an account
- Log in and log out
- Add tasks
- View tasks in a three-column Kanban board
- Edit task titles
- Move tasks between To Do, In Progress, and Done
- Delete tasks
- Scope task records to the logged-in user

## Technologies

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" title="HTML">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" title="CSS">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://nodejs.org/" title="Node.js">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://expressjs.com/" title="Express">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://www.mongodb.com/" title="MongoDB">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="40" height="40">
  </a>
  &nbsp;
  <a href="https://www.passportjs.org/" title="Passport">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/passport/passport-original.svg" alt="Passport" width="40" height="40">
  </a>
</p>

- [EJS](https://ejs.co/)
- [Mongoose](https://mongoosejs.com/)

## Run Locally

**Requirements:** Node.js, npm, and a MongoDB Atlas database.

1. Clone the repository:

```bash
git clone https://github.com/nilesleesmith/simple-personal-kanban-task-manager.git
```

2. Open the project directory:

```bash
cd simple-personal-kanban-task-manager
```

3. Install the dependencies:

```bash
npm install
```

4. Create `atlas-credentials.env` and add your MongoDB Atlas connection string:

```dotenv
MONGODB_URI="your_mongodb_connection_string"
```

Do not commit database credentials.

5. Start the application:

```bash
npm start
```

6. Open `http://localhost:3001`.

## Live Site

https://simple-personal-kanban-task-manager.onrender.com

## Screenshots

Coming soon! Desktop, tablet, and mobile screenshots will be added here.