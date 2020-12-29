
exports.up = function(knex) {
  return knex.schema.createTable('carrier', tbl => {
      tbl.increments()
      tbl.string('carrier_name').notNullable()
      tbl.string('carrier_logo')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('carrier');
};
