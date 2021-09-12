function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}


const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require('cors');

dotenv.config();
app.use(express.json());
app.use(cors())
app.use("/images", express.static(path.join(__dirname, "images")));

mongoose
  .connect("mongodb+srv://Dinusha:Dinu1009@cluster0.j3bk1.mongodb.net/blog?retryWrites=true&w=majority", 
  { 
    
    useNewUrlParser: true,

    useUnifiedTopology: true,
    
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
  console.log("Connected to MongoDB");
  });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/usezrs", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT || 8080 , () =>{
  console.log("Backend is running.");
});

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://Dinusha:<password>@cluster0.j3bk1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
//delete  useCreateIndex: true,  //     useFindAndModify:true // useFindAndModify: false,  //useCreateIndex: true,