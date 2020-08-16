const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const serverStatic = require("serve-static");

const configuration = require("../models/knexfile");
const database = require("knex")(configuration);

const app = express();
const port = process.env.PORT || 8000;

app.use(serverStatic(path.join(__dirname, "../build")));
app.use(bodyparser.json());
app.use(cors());

app.get("/notes", async (req, res) => {
  try {
    const data = await database("notes").select();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
