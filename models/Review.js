const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    username : {type : mongoose.Schema.Types.ObjectId , ref: "User"},
    vote : {type : Number, default : 5},
    desc: { type: String},
    isSatisfied : {type : Boolean, default : true}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);