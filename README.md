# Task Tracker API

A simple Task Tracker API built with Node.js, Express, TypeScript, and MongoDB. This API allows users to create, read, update, and delete tasks.

## Prerequisites

- **Node.js** (v14 or higher recommended)
- **MongoDB** (local or cloud instance)
- **npm** (comes with Node.js) or **yarn**
- **TypeScript** (configured in the project)

## Project Structure

```plaintext
.
├── src
│   ├── controllers
│   │   └── taskController.ts      # Contains controller functions for task CRUD operations
│   ├── models
│   │   └── taskModel.ts           # Defines the Task model schema with Mongoose
│   ├── routes
│   │   └── taskRoutes.ts          # Defines routes for CRUD operations
│   └── app.ts                     # Main app setup with Express, middleware, and MongoDB connection
├── dist                           # Compiled TypeScript output (ignored in .gitignore)
├── .env.copy                      # Environment variables, rename this to .env
├── .gitignore                     # Ignored files configuration
├── package.json                   # Project dependencies and scripts
└── tsconfig.json                  # TypeScript configuration
```

## Getting Started

1. Clone the repository

   ```
   git clone https://github.com/your-username/task-tracker.git
   cd task-tracker
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Environment Setup

- Rename .env.example to .env and replace <YOUR_MONGO_DB_CONNECTION_URI> to your mongo db connection url.

4. Build the project (if needed for deployment)

   ```
   tsc
   ```

5. Run the app in development mode

   ```
   npm run dev
   ```

6. Run the app in production mode

   ```
   npm start
   ```

## API Endpoints

- GET /api/tasks - Retrieve all tasks
- POST /api/tasks - Create a new task
- PUT /api/tasks/:id - Update an existing task
- DELETE /api/tasks/:id - Delete a task

## Notes

- Make sure MongoDB is running or available at the specified URI.
- TypeScript compiles into JavaScript in the dist folder.

## License

This project is licensed under the MIT License.
