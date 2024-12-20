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
    "Painting", 
            "Plumbing", 
            "Carpentry", 
            "Blacksmiths", 
            "Home Appliance Repair", 
            "Motion Design", 
            "Video Editing", 
            "Graphic Design", 
            "AI", 
            "Programming"
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
