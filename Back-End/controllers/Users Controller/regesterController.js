// const User = require("../../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const storUserData = async (req, res) => {
//   const SECRET_KEY = "Shay";
//   const { fname, lname, email, password, city, category, number } = req.body;
//   const imgPath = req.file ? req.file.path : null;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   console.log("Hi");

//   try {
//     const newUser = new User({
//       fname,
//       lname,
//       email,
//       password: hashedPassword,
//       city,
//       category,
//       number,
//       img: imgPath,
//       role: "user",
//     });

//     await newUser.save();
//     console.log(newUser);

//     const token = jwt.sign(
//       { userId: newUser._id }, // Payload
//       SECRET_KEY, // Replace with your secret key
//       { expiresIn: "1h" } // Optional: Set token expiration
//     );

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: "Server error", details: err.message });
//   }
// };

// // =====> Delet Data fun <=====
// // async function deleteAllUser() {
// //   try {
// //     await User.deleteMany({});
// //     console.log("All Users deleted successfully!");
// //   } catch (err) {
// //     console.error("Error deleting Users:", err);
// //   }
// // }
// // deleteAllUser();

// module.exports = { storUserData };

const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const storUserData = async (req, res) => {
  const { fname, lname, email, password, city, category, number } = req.body;
  const imgPath = req.file ? req.file.path : null;

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      fname,
      lname,
      email,
      password: hashedPassword,
      city,
      category,
      number,
      img: imgPath,
      role: "user",
    });

    // Save the new user in the database
    await newUser.save();

    // Generate JWT token after successful registration
      // const token = jwt.sign(
      //   { userId: newUser._id }, // Payload containing user ID
      //   "Shay", // Your secret key, make sure to change it to something secure in production
      //   { expiresIn: "1h" } // Token expiration time
      // );

    // Send back the token as a response
    res.json({
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
};

module.exports = { storUserData };
