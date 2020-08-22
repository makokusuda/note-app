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

app.post("/notes", async (req, res) => {
  const note = req.body;

  for (let reqParam of ["title", "body"]) {
    if (!note[reqParam]) {
      note[reqParam] = "";
    }
  }

  try {
    const id = await database("notes").insert({
      title: note.title,
      body: note.body,
    });
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// replace
// app.put("/notes/:id", async (req,res) => {

// })

// app.delete("/notes/:od", async (req, res) => {

// })

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
