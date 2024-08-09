const express = require('express');
const { createListing, deleteListing, updateListing, getListing, getSaleProperties, getAllProperties, getListings, getListingList, getAllListingCount , getSaleListingCount, getRentListingCount, getRentProperties } = require('../controllers/listingController');
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
router.get('/property/all/list', isValidToken, getAllProperties);
router.get('/property/rent/list', isValidToken, getRentProperties);
router.get('/property/sale/list', isValidToken, getSaleProperties);

module.exports = router;