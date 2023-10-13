const express = require("express");
const cors = require("cors");
const routes = require("../api/routes");

const modules = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use(routes);
};

module.exports = modules;
