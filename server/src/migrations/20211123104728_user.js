
exports.up = function (knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.specificType('phone', 'TEXT[]').notNullable();
        table.string('email').notNullable();
        table.string('country').notNullable();
        table.integer('from').defaultTo(10000).notNullable();
        table.integer('to').defaultTo(200000).notNullable();
        table.string('radio').notNullable();
        table.specificType('preferences', 'TEXT[]').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("todos");
};
