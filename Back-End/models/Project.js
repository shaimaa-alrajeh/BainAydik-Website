const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  price: String,
  summary: String,
  img: String,

  rating: { type: [Number], default: [] },
  avgrating: { type: Number, default: 0 },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
