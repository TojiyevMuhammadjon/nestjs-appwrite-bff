const fetch = require('node-fetch');
const fetchDataFromOlx = require('../../utils/fetchData');

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

  fetch(limitedPhonesUrl)
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching limited phones data:", error);
      res.status(500).json({ error: "Failed to fetch limited phones data" });
    });
};

module.exports = {
  fetchData,
  getLimitedPhones,
};
