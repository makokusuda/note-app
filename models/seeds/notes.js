exports.seed = function (knex) {
  return knex("notes")
    .del()
    .then(function () {
      return knex("notes").insert([
        { title: "Database", body: "PostgreSQL" },
        { title: "Groceries", body: "Rice, Egg" },
        { title: "Books to read", body: "Japanese history" },
      ]);
    });
};
