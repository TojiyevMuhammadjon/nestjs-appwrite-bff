// Import required modules using ESM syntax
import express from "express";
import startModules from "./start/modules.js";
import startRun from "./start/run.js";

const app = express();

startModules(app);
startRun(app);
