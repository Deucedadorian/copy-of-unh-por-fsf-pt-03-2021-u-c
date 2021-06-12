const router = require('express').Router();
const TravellerRoutes = require('./travellerRoutes');

router.use('/travellers', TravellerRoutes);

module.exports = router;
