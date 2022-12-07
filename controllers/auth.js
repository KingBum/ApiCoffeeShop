const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        username: req.body.username,
        phone : req.body.phone,
        password: hashedPass
    })
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
}

const login = async (req, res) => {
    try {
        const checkUserName = await User.findOne({ username: req.body.username })
        !checkUserName && res.status(401).json("Don't Found User")

        const hasdedPassword = await bcrypt.compare(req.body.password, checkUserName.password)
        !hasdedPassword && res.status(401).json("Wrong Password!!!")

        const { password, ...others } = checkUserName._doc
        res.status(200).json({...others})
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = {login, register}