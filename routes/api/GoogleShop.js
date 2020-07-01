const router = require("express").Router();
const GoogleShopCon = require("../../controllers/GoogleShopCon");

// Matches with "/api/GoogleShop"
router
  .route("/")
  .get(GoogleShopCon.findAll);

module.exports = router;
