import OlxParseRequest from '../../models/olxParseRequest.schema.js'; // Update the file extension as needed
import OlxSchemaResponse from '../../models/olxSchemaResponse.schema.js'; // Update the file extension as needed

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

export { olxRequest, olxResponse };
