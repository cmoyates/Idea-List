const express = require("express");
const router = express.Router();

const suggestion_controller = require("../controllers/suggestion");

router.post("/", suggestion_controller.create);

router.post("/:user_name/:content", suggestion_controller.createTwitch);

router.get("/:id/:timezone", suggestion_controller.getOne);

router.get("/:timezone", suggestion_controller.getAll);

router.put("/:id", suggestion_controller.update);

router.delete("/:id", suggestion_controller.deleteOne);

module.exports = router;