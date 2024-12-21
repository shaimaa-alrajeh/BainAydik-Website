/* const express = require("express");
const multer = require("multer");
const {
  storProjectData,
  getAllProjects,
} = require("../../controllers/Project Controller/projectController");
console.log( "kkkkk",getAllProjects);
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

// Multer file filter for images only
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); 
  } else {
    cb(new Error("Only image files are allowed!"), false); 
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
router.post("/projects", upload.single("img"), storProjectData);
router.get("/projects", getAllProjects);

module.exports = router;
 */
const express = require("express");
const multer = require("multer");
const {
  storProjectData,
  getAllProjects,
} = require("../../controllers/Project Controller/projectController");
const { authorizeRole } = require("../../middleware/auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});


router.post("/projects", authorizeRole("user"), upload.single("img"), storProjectData);
router.get("/projects", authorizeRole("user"), getAllProjects);

module.exports = router;
