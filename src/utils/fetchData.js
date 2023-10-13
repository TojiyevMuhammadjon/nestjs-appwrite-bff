import fetch from "node-fetch";


const fetchDataFromOlx = async (adId, res) => {
  try {
    const response = await fetch(
      `https://www.olx.uz/api/v1/targeting/data/?page=ad&params%5Bad_id%5D=${adId}&dfp_user_id=0&advertising_test_token=`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching OLX data:", response.statusText);
      res.status(500).json({ error: "Failed to fetch OLX data" });
      return null;
    }
  } catch (error) {
    console.error("Error fetching OLX data:", error);
    res.status(500).json({ error: "Failed to fetch OLX data" });
    return null;
  }
};

export default fetchDataFromOlx;
