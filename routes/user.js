const router = require("express").Router();
const userController = require("../controllers/user")

//update user
router.put("/:id", userController.updateUser);

//get a user
router.get("/", userController.getUser);

module.exports = router;