const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const SECRET_KEY = "Shay";

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) return res.status(401).send("Invalid credentials");

    // res.send({ user });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    // res.json({
    //   message: "Login successful",
    //   token,
    //   user: {
    //     id: user._id,
    //     email: user.email,
    //     role: user.role,
    //   },
    // });
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error", details: error.message });
  }
};

module.exports = { loginController };
