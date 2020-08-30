# Kiroku📝

You can see how it works: [https://cc-note-app.herokuapp.com/](https://cc-note-app.herokuapp.com/)

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

## Deployment

Build app

```
yarn build
```
