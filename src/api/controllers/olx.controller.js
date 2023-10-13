import axios from 'axios';

const olxRoute = async (res) => {
  try {
    const response = await axios.get(
      "https://www.olx.uz/api/v1/targeting/data/?page=ad&params%5Bad_id%5D=50418161&dfp_user_id=0&advertising_test_token="
    );

    const data = response.data.data;

    res.json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from OLX API." });
  }
};

export { olxRoute };
