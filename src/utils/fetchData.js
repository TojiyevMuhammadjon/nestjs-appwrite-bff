import fetch from 'node-fetch';

export async function fetchDataFromOlx(adId) {
  const targetingDataUrl = `https://www.olx.uz/api/v1/targeting/data/?page=ad&params%5Bad_id%5D=${adId}&dfp_user_id=0&advertising_test_token=`;

  try {
    const targetingResponse = await fetch(targetingDataUrl);
    const targetingData = await targetingResponse.json();
    const adTitle = targetingData.data.targeting.ad_title;
    return adTitle;
  } catch (error) {
    console.error('Error fetching data from OLX:', error);
    throw new Error('Failed to fetch OLX data');
  }
}
