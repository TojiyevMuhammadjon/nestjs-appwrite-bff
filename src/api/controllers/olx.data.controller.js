const OlxParseRequest = require("../../models/olxParseRequest.schema");
const OlxSchemaResponse = require("../../models/olxSchemaResponse.schema");

const olxRequest = async (req, res) => {
  try {
    const olxRequest = new OlxParseRequest(req.body);

    await olxRequest.save();

    res.status(200).json({ message: "OLX request received and saved." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process OLX request." });
  }
};

const olxResponse = async (req, res) => {
  try {
    const olxResponses = await OlxSchemaResponse.find();

    res.status(200).json(olxResponses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve OLX responses." });
  }
};

module.exports = {
  olxRequest,
  olxResponse,
};
