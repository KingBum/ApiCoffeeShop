const express = require('express')
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer");
const path = require("path");

const authRoute = require("./routes/auth")
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const reviewRoute = require("./routes/review");


dotenv.config();
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "public/images")));


const MONGO_URL1 = "mongodb+srv://dbUser:dbUser@mywebsite.a9pvj.mongodb.net/CoffeeShop?retryWrites=true&w=majority"


mongoose.connect(MONGO_URL1).then(console.log("Connected to MongoDB")).catch((err) => console.log(err))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({storage : storage})
  app.post("/api/upload", upload.single("file"), (req,res) =>{
      try{
          return res.status(200).json("file uploaded successfully")
      }catch(err){
          console.log(err)
      }
  })
  


app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/users", userRoute)
app.use("/api/reviews", reviewRoute)


app.listen(7000, () => {
    console.log(`Backend is running !!!`)
})