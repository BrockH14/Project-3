const router = require("express").Router();
const savedCon = require("../../client/src/controllers");

// Matches with "/api/saved"
router.route("/")
  .get(savedCon.findAll)
  .post(savedCon.create);

// Matches with "/api/saved/:id"
router
  .route("/:id")
  .get(savedCon.findById)
  .put(savedCon.update)
  .delete(savedCon.remove);

module.exports = router;
