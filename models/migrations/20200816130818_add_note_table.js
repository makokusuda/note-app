exports.up = async function (knex) {
  await knex.schema.createTable("notes", (t) => {
    t.increments().index(); // id
    t.string("body");
    t.timestamps(false, true);
  });
  await knex.raw(`CREATE TRIGGER update_timestamp
  BEFORE UPDATE
  ON notes
  FOR EACH ROW
  EXECUTE PROCEDURE update_timestamp();
`);
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
