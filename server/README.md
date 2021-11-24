# Backend

## DB

PostgreSQL is the DB used in this project, to try the backend functionalities you have to create a local DB with the connection used in the `utils/knexfile.js` or if you want you can change that. 

## Setup

``` bash
# install dependencies
npm install

# run the project
npm run start

# run the migrations
npm run knex migrate:latest
```

## Calls the API

If you want to try the API call you can run on the browser the following command:

`http://localhost:3000/users`