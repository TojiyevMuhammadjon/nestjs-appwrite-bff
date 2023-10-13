import express from "express";
import cors from "cors";
import routes from "../api/routes/index.js"; 

export default function startModules(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use(routes);
}
