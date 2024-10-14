const mongoose = require("mongoose");
const { Schema } = mongoose;

const artSchema = new mongoose.Schema({
  url: String,
  title: String,
  subtitle: String,
  artist: String,
  desc: String,
});

const ArtModel = mongoose.model("Art", artSchema);

module.exports = ArtModel;
