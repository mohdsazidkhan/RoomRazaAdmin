const express = require('express');
const { createListing, deleteListing, updateListing, getListing, getListings, getListingList, getAllListingCount , getSaleListingCount, getRentListingCount } = require('../controllers/listingController');
const {isValidToken} = require("../controllers/authController");
const router = express.Router();

router.get('/listing/all/totalCount', isValidToken, getAllListingCount);
router.get('/listing/sale/totalCount', isValidToken, getRentListingCount);
router.get('/listing/rent/totalCount', isValidToken, getSaleListingCount);
router.get('/listing/list', isValidToken, getListingList);
router.post('/listing/create', isValidToken, createListing);
router.delete('/listing/delete/:id', isValidToken, deleteListing);
router.post('/listing/update/:id', isValidToken, updateListing);
router.get('/listing/get/:id', isValidToken, getListing);
router.get('/listing/get', isValidToken, getListings);

module.exports = router;