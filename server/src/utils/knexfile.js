const { knexSnakeCaseMappers } = require('objection');

const defaults = {
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '5432',
        database: 'useronboarding',
        user: 'postgres',
        password: 'password'
    },
    ...knexSnakeCaseMappers()
}

module.exports = {
    local: {
        ...defaults,
        useNullAsDefault: true,
        migrations: {
            directory: '../migrations',
        }
    },
    development: {
        ...defaults,
        migrations: {
            directory: '../migrations'
        },
        useNullAsDefault: true
    }
}