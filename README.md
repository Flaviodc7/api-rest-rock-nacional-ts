# API REST ROCK NACIONAL (CRUD Artists Express TypeScript)

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
cd api-rest-rock-nacional-ts
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

## Authentication

This project uses JSON Web Tokens (JWT) for secure route handling. It's important to include specific user information within the token for certain operations.

### Sending the Authorization Token

When making requests to protected routes, you must include an Authorization header with a JWT. This token must include a general_email claim, which is used by the middleware to extract the user's email for further processing.

Example of a JWT payload with general_email:

```json
{
  "general_email": "user@example.com",
}
```
To send the token in a request, add it to the Authorization header as follows:

```sh
Authorization: Bearer your_jwt_token_here
```

Ensure that your JWT is correctly signed and includes the `general_email` claim to avoid receiving `401 Unauthorized` or `403 Forbidden` responses from the server.

## Endpoints

#### Create artist
```sh
POST /artist/create-artist
```
Creates a new artist

##### Request body
```json
{
  "date_of_birth": "DD/MM/YYYY",
  "instrument": "vocals | guitar | bass | piano | drums",
  "name": "string",
  "nationality": "string"
}
```


#### Get artist
```sh
GET /artist/get-artist/:id
```
Retrieves an artist by their ID.

##### Parameters

- `id`: The ID of the artist to retrieve


#### Get artists
```sh
GET /artist/get-artists
```
Retrieves all artists


#### Update Artist

```sh
POST /artist/update-artist
```
Updates an existing artist.

##### Request Body

```json
{
  "id": "string",
  "date_of_birth": "DD/MM/YYYY",
  "instrument": "vocals | guitar | bass | piano | drums",
  "name": "string",
  "nationality": "string"
}
```


#### Delete Artist
```sh
DELETE /artist/delete-artist/:id
```
Deletes an artist by their ID

##### Parameters

- `id`: The ID of the artist to delete


## Request Validation

#### Create Artist

- `date_of_birth`: A required string representing the date of birth in the format 'DD/MM/YYYY'.
- `instrument`: A required string representing the instrument. Must be one of 'vocals', 'guitar', 'bass', 'piano', 'drums'.
- `name`: A required string representing the name of the artist.
- `nationality`: A required string representing the nationality of the artist.

#### Update Artist

- `id`: A required string representing the ID of the artist to update.
- `date_of_birth`: An optional string representing the updated date of birth in the format 'DD/MM/YYYY'.
- `instrument`: A optional string representing the updated instrument. Must be one of 'vocals', 'guitar', 'bass', 'piano', 'drums'.
- `name`: An optional string representing the updated name of the artist.
- `nationality`: An optional string representing the updated nationality of the artist.

## Available Scripts
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

## License
This project is licensed under the ISC License.

## Author
Flavio Coscarella