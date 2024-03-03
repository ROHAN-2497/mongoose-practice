const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

// database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-practice");
    console.log(`database connection succesful`);
  } catch (err) {
    console.log(`failed to database connect`, err);
  }
}
main();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
