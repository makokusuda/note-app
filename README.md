# Note app

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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

## Running the tests

## Deployment

Build app

```
yarn build
```
