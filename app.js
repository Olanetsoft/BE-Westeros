const express = require("express");
let app = express();

//get db connection
require("./config/connection");

const bodyParser = require("body-parser");

//Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// A simple get
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Team Westeros Backend API.",
  })
);

module.exports = app;
