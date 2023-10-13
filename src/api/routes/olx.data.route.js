const { Router } = require("express");
const {
  olxRequest,
  olxResponse,
} = require("../controllers/olx.data.controller");
const router = Router();

router.post("/send-olx-request", olxRequest);
router.get("/receive-olx-response", olxResponse);

module.exports = router;
