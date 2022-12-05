const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const productRoute = require("./routes/product");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const cors = require("cors");
const port = process.env.PORT;

dotenv.config();
app.use(express.json());
app.use(cors());

// Connect to Mongo DB
mongoose
   .connect(process.env.MONGO_URL)
   .then(console.log("Connected to MongoDB!"))
   .catch((err) => console.log(err));

const fileStorage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "images");
   },
   filename: (req, file, cb) => {
      cb(null, new Date().getTime() + "-" + file.originalname);
   },
});

const upload = multer({ storage: fileStorage });
app.post("/api/images", upload.single("file"), (req, res) => {
   res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);

app.listen(port, () => {
   console.log("Backend is Running!");
});
