const express = require("express");
const { profileController } = require("../../controllers/Users Controller/profileController")
const {authorizeRole} = require("../../middleware/auth");
const router = express.Router();

router.get("/profile" ,authorizeRole("user"), profileController);

module.exports = router;
