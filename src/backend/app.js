const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); // import the cors middleware
const app = express();
var port = 4000;
var test = require("./models/myData.js");
const router = express.Router();
var uri = "mongodb://127.0.0.1:27017/test";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

// enable cors for all routes
app.use(cors());

//define route for display fetching data
router.get("/data", async (req, res) => {
  try {
    const data = await test.find();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.use("/", router);

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
