import axios from "axios";
import fetchDataFromOlx from "../../utils/fetchData.js"; // Update the file extension as needed

const fetchData = async (req, res) => {
  try {
    const adId = req.query.adId;
    const adTitle = await fetchDataFromOlx(adId, res);
    res.json({ adTitle });
  } catch (error) {
    console.error("Error fetching OLX data:", error);
    res.status(500).json({ error: "Failed to fetch OLX data" });
  }
};

const getLimitedPhones = async (req, res) => {
  const offerId = req.params.offerId;
  const limitedPhonesUrl = `https://www.olx.uz/api/v1/offers/${offerId}/limited-phones/`;

  try {
    const response = await axios.get(limitedPhonesUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching limited phones data:", error);
    res.status(500).json({ error: "Failed to fetch limited phones data" });
  }
};

export { fetchData, getLimitedPhones };
