import Database from "./Database.js";

import Express from "express";

const App = Express();
const port = 45030;

const db = new Database();

db.connect();

App.use(Express.json());

App.put("/people/create", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let faveColor = req.body.favoriteColor;

  db.createOne(firstName, lastName, faveColor).then((response) => res.json(response));
});

App.get("/people/:person", (req, res) => {
  let search = req.params.person;
  db.readOne(search).then((response) => res.json(response));
});

App.listen(port, () => {
  console.log("Server is running.");
}); 