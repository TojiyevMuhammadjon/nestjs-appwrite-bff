import { Router } from "express";
import { olxRequest, olxResponse } from "../controllers/olx.data.controller.js"; // Update the path to the controller module as needed

const router = Router();

router.post("/send-olx-request", olxRequest);
router.get("/receive-olx-response", olxResponse);

export default router;
