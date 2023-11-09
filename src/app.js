const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { Band } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians

app.get("/musicians", async (req, res) => {
  const musicians = await Musician.findAll();
  res.json(musicians);
});

app.get("/musicians/:id", async (req, res) => {
  const id = req.params.id;
  const musician1 = await Musician.findByPk(id);
  res.json(musician1);
});

app.get("/bands", async (req, res) => {
  const bands = await Band.findAll();
  res.json(bands);
});

app.get("/bands/:id", async (req, res) => {
  const id = req.params.id;
  const bands = await Band.findByPk(id);
  res.json(bands);
});
module.exports = app;
