exports.seed = function (knex) {
  return knex("notes")
    .del()
    .then(function () {
      return knex("notes").insert([
        { body: "PostgreSQL \nMongoDB \nMySQL" },
        { body: "Rice \nEgg" },
        { body: "Japanese history \nKanji \nCooking \nReact" },
      ]);
    });
};
