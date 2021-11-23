
exports.up = function(knex) {
  return knex.schema.alterTable('user', (table) => {
      table.string('phone').alter();
  });
};

exports.down = function(knex) {
    return knex.schema.alterTable('user', (table) => {
        table.string('phone').alter();
    });
};
