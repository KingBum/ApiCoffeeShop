const User = require("../models/User");
const Product = require("../models/Product");

const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateProduct = async (req, res) => {
    try {
        if (req.body.isAdmin) {
            try {
                const updatedPost = await Product.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
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

const deleteProduct = async (req, res) => {
    try {
        const post = await Product.findById(req.params.id);
        if (req.body.isAdmin) {
            await post.delete();
            res.status(200).json("Post has been deleted...");

        } else {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const getProduct = async (req, res) => {
    try {
        const post = await Product.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}


const getAllProduct = async (req, res) => {
    try {
        posts = await Product.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct }