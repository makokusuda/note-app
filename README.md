# Kiroku📝

You can see how it works: [https://kiroku-notes.herokuapp.com/](https://kiroku-notes.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  
See deployment for notes on how to deploy the project on a live system.

### Prerequirements

Install PostgreSQL

### Installing

Install all dependencies

```
yarn install
```

### Setup Local Database

Create database

```
psql
CREATE DATABASE note;
```

Create data table

```
yarn knex migrate:up 20200829162649_add_function_updated_at.js --knexfile models/knexfile.js
yarn migrate
```

Run seed

```
yarn seed
```

### Run app

Run server

```
yarn start:server
```

Run client on another terminal

```
yarn start:client
```

Visit `http://localhost:3000/`

## Running the tests

Run tests for server

```
yarn test:server
```

## Deployment

Build app

```
yarn build
```
