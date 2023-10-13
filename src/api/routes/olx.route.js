import { Router } from "express";
import { olxRoute } from "../controllers/olx.controller.js"; // Update the path to the controller module as needed

const router = Router();

router.get("/api/olx", olxRoute);

export default router;
