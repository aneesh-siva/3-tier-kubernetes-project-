const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://mongodb-service:27017/threetierdb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const ItemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", ItemSchema);

// Routes
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/items", async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});