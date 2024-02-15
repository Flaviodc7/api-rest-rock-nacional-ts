# CRUD Artists Express TypeScript

This project is designed to manage artist data using an Express server with TypeScript. It utilizes a MongoDB database through Mongoose for data persistence, ensuring structured data handling and validation with Joi, and secure route handling with JSON Web Tokens.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (Preferably the latest LTS version)
- npm (Comes with Node.js)
- MongoDB (For the database)

### Installing

First, clone the repository to your local machine:

```sh
git clone <repository-url>
```

Navigate to the project directory:

```sh
cd crud-artists-express-typescript
```

Install the project dependencies:

```sh
npm install
```

### Environment Setup

Create a `.env` file in the root of the project and populate it with the necessary environment variables. For example:

```env
PORT=${PORT}
MONGO_CONNECTION_URL=${MONGO_CONNECTION_URL}
MONGO_DB=${MONGO_DB}
```

Replace MONGO_CONNECTION_URL and MONGO_DB with your MongoDB CONNECTION URL and MONGO DB.

### Available Scripts
In the project directory, you can run:

`npm run dev`
Runs the app in development mode using nodemon and tsconfig-paths for TypeScript path aliases. The server will restart if you make edits.

`npm run build`
Compiles the TypeScript files to JavaScript into the build directory and resolves path aliases with tsc-alias.

`npm start`
Runs the built app from the build directory. Use this after running npm run build.

`npm run eslint`
Runs ESLint to identify and report on patterns found in the ECMAScript/JavaScript code.

`npm run fix`
Runs ESLint with the --fix option to automatically fix problems.

`npm run prettier`
Checks your code formatting against Prettier's standards.

`npm run format`
Formats your code using Prettier.

### License
This project is licensed under the ISC License - see the LICENSE.md file for details.

### Author
Flavio Coscarella