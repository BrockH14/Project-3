const path = require("path");
const router = require("express").Router();
const savedRoutes = require("./saved");
const GoogleShopRoutes = require("./GoogleShop");

// Book routes
router.use("/saved", savedRoutes);

// Google Routes
router.use("/GoogleShop", GoogleShopRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;