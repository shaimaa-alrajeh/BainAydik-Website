const Project = require("../../models/Project");
const User = require("../../models/User"); // Import User model

const storProjectData = async (req, res) => {
  const { title, price, summary, userId } = req.body;
  const imgPath = req.file ? req.file.path : null;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "User ID is required to add a project" });
  }

  try {
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ error: "User not found" });
    } 

    const newProject = new Project({
      title,
      price,
      summary,
      userId,
      img: imgPath,
    });

    await newProject.save();

    res.status(201).json({
      message: "Project saved successfully",
      project: newProject,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
};

module.exports = { storProjectData };

// =====> Delet Data fun <=====
// async function deleteAllProjects() {
//   try {
//     await Project.deleteMany({});
//     console.log("All projects deleted successfully!");
//   } catch (err) {
//     console.error("Error deleting projects:", err);
//   }
// }
// deleteAllProjects();

// const getAllProject = async (req, res) =>
// {
//   const user = User.findOne({ _id: ObjectId("userId_here") });

//   const projects =Project.find({
//     userId: ObjectId("userId_here"),
//   }).toArray();

// }

// Fetch all projects with the user's information

// Project.find()
//   .populate("userId") // Populate the userId field with data from the Users collection
//   .then((projects) => {
//     console.log(projects);
//   })
//   .catch((err) => console.error(err));

module.exports = { storProjectData };
