exports.up = function (knex, Promise) {
  return knex.schema.createTable("notes", (t) => {
    t.increments().index(); // id
    t.string("title");
    t.string("body");
    t.timestamp("update_at").defaultTo(knex.fn.now()); // update_at
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("notes");
};
