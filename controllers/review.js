const Review = require("../models/Review");

const createReview = async (req, res) => {
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);
    } catch (err) {
        res.status(500).json(err);
    }
}

const updatedReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (review.username.toString() === req.body.username) {
            try {
                const updatedReview = await Review.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedReview);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (review.username.toString() === req.body.username) {
            try {
                await review.delete();
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const getReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate("username");
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json(err);
    }
}


const getAllReview = async (req, res) => {
    try{
        const reviews = await Review.find().populate("username");
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { createReview, updatedReview, deleteReview, getReview, getAllReview}