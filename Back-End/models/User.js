const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: { type: String, require: true },
  lname: { type: String, require: true },
  email: { type: String, unique: true },
  password: { type: String, require: true },
  city: { type: String, require: true },
  category: {
    type: String,
    enum: [
      "Carpentry",
      "Blacksmithing",
      "Plumbing",
      "Home Appliance Repair",
      "painting Design",
      "programing",
      "Marketing",
      "Motion / Video Editing",
      "Artificial Intelligence",
      "Ui / Ux",
    ],
    require: true,
  },
  number: Number,
  img: { type: String, require: true },
  role: { type: String, enum: ["user", "viewer"], default: "viewer" },
  avgRating: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
