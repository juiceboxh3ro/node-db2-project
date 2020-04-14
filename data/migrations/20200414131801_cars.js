
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    // a primary key that autoincrements
    // leave blank for 'id'
    tbl.increments()

    // an index makes searching for a value in a column faster
    tbl.string('VIN', 17).notNullable().unique().index()
    tbl.string('make', 255).notNullable()
    tbl.string('model', 255).notNullable()
    tbl.integer('mileage').notNullable()
    tbl.string('trans-type')
    tbl.string('title').defaultsTo('clean')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
