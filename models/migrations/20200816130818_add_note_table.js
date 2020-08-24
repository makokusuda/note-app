exports.up = function (knex, Promise) {
  return knex.schema.createTable("notes", (t) => {
    t.increments().index(); // id
    t.string("body");
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("notes");
};
