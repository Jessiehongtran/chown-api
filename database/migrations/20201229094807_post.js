
exports.up = function(knex) {
  return knex.schema.createTable('post', tbl => {
      tbl.increments()
      tbl.string('transport_type')
      tbl.integer('deal_expire_date_int')
      tbl.integer('oneway_ticketID')
         .notNullable()
         .unsigned()
         .references('id')
         .inTable('ticket')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.boolean('hasReturn')
      tbl.integer('return_ticketID')
         .unsigned()
         .references('id')
         .inTable('ticket')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('post')
};
