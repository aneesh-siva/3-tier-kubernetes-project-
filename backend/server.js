const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongodb-service:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const VisitSchema = new mongoose.Schema({
  count: Number
});

const Visit = mongoose.model("Visit", VisitSchema);

app.get("/api", async (req, res) => {
  let visit = await Visit.findOne();

  if (!visit) {
    visit = new Visit({ count: 1 });
  } else {
    visit.count += 1;
  }

  await visit.save();

  res.json({ message: "Hello from Backend!", visits: visit.count });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
