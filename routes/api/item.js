const router = require("express").Router();
const savedCon = require("../../Controller/savedCon");

// Matches with "/api/item"
router.route("/")
  .get(savedCon.findAll)
  .post(savedCon.create);

// Matches with "/api/item/:id"
router
  .route("/:id")
  .get(savedCon.findById)
  .put(savedCon.update)
  .delete(savedCon.remove);

module.exports = router;
