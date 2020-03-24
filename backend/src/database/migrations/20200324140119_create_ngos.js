
exports.up = function(knex) {
  knex.schema.createTable('ngos', function(table) {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table.string('state', 2).notNullable()
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('ngos')
};
