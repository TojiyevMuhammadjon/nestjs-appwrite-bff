const { Router } = require('express');
const { fetchData, getLimitedPhones } = require('../controllers/olx.fetch.data.controller');

const router = Router();

router.get('/fetch-olx-targeting-data', fetchData);
router.get('/getLimitedPhones/:offerId', getLimitedPhones);

module.exports = router;
