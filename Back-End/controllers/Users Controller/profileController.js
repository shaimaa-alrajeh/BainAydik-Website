const User =require("../../models/User")

const profileController =async (req, res) =>
{
    try {
    const userId = req.user.id;
      const user = await User.findById(userId).select("-password"); 
      console.log(user)

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
}

 module.exports = { profileController };