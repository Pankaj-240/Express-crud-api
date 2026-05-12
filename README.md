# Express CRUD API

A REST API built with Node.js and Express.js with input validation using Joi.

## Features
- Full CRUD operations on courses resource
- Input validation with Joi
- Proper HTTP status codes and error messages
- Tested with Hoppscotch

## Tech Stack
- Node.js
- Express.js
- Joi

## Getting Started

### Prerequisites
- Node.js installed

### Installation
```bash
git clone https://github.com/Pankaj-240/Express-crud-api.git
cd Express-crud-api
npm install
node index.js
```

Server runs at `http://localhost:8000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses` | Get all courses |
| GET | `/api/courses/:id` | Get course by ID |
| POST | `/api/courses` | Add new course |
| PUT | `/api/courses/:id` | Update course by ID |
| DELETE | `/api/courses/:id` | Delete course by ID |

## Request Body (POST / PUT)
```json
{
  "name": "your course name"
}
```

## Validation Rules
- `name` is required
- `name` must be a string between 3 and 30 characters

## Example Response
```json
{
  "id": 1,
  "name": "course1"
}
```

## Note
This is a learning project — data is stored in memory (no database).
Built while learning RESTful API design with Express.js.
