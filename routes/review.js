const router = require("express").Router();
const reviewController = require("../controllers/review")

//CREATE
router.post("/", reviewController.createReview);

//UPDATE
router.put("/:id", reviewController.updatedReview);

//DELETE REVIEW
router.delete("/:id", reviewController.deleteReview);

//GET REVIEW
router.get("/:id", reviewController.getReview);

//GET ALL REVIEWS
router.get("/", reviewController.getAllReview);

module.exports = router;