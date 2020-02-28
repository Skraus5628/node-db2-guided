# Database Schema Design

Guided project for **Node DB II** module.

## Prerequisites

- [DB Browser for SQLite](https://sqlitebrowser.org/) installed.
- a REST client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.
- create a free account for [DB Designer](https://dbdesigner.net).

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor explores schema design with this API.

Data Definition Language (DDL)

CREATE TABLE <table> (
    <column> <type> <constraints>,
    <column> <type> <constraints>,
);
<!-- creates table -->
<!-- examples
CREATE TABLE "fruits" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"name" TEXT NOT NULL UNIQUE,
"avgWeightOz" FLOAT NOT NULL,
"delicious" BOOLEAN DEFAULT 1,
"color" TEXT 
); -->

ALTER TABLE <table> <stuff to change>;
<!-- edits table -->

DROP TABLE <table>;
<!-- deletes table -->
<!-- examples
DROP TABLE IF EXISTS "fruits"; -->

Database Migrations
<!-- 
// npx knex migrate:make fruits
// npx knex migrate:latest
// npx knex migrate:rollback
// npx knex migrate:make fruits_color
// npx knex seed:make fruits
// npx knex seed:run 
-->

Data Types in SQlite
-Null
-Integer
-real
-text
-blob
-booelean (1 or 0)
