import { Router } from 'express';
import { fetchData, getLimitedPhones } from '../controllers/olx.fetch.data.controller.js'; // Update the path to the controller module as needed

const router = Router();

router.get('/fetch-olx-targeting-data', fetchData);
router.get('/getLimitedPhones/:offerId', getLimitedPhones);

export default router;
