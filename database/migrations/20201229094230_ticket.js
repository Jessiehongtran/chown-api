
exports.up = function(knex) {
    return knex.schema.createTable("ticket", tbl => {
      tbl.increments()
      tbl.string('depart_place')
      tbl.integer('depart_date_int')
      tbl.integer('depart_time_int')
      tbl.string('arrive_place')
      tbl.integer('arrive_date_int')
      tbl.integer('arrive_time_int')
      tbl.integer('carrierID')
         .notNullable()
         .unsigned()
         .references('id')
         .inTable('carrier')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.float('price')
      tbl.string('reservation_code')
      tbl.boolean('isReturnWay')
      tbl.boolean('isAcceptedByAirline')
      tbl.boolean('isPublished')
      tbl.boolean('isPaymentProcessed')
      tbl.boolean('isSold')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ticket')
};
