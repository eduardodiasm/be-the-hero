
exports.up = function(knex) {
    knex.schema.createTable('incidents', function(table) {
        table.increments()
        
        table.string('title').notNullable()

        table.string('description').notNullable()

        table.decimal('value').notNullable()

        table.string('ngo_id').notNullable()
        table.foreign('ngo_id').references('id').inTable('ngos')
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('incidents')

};
