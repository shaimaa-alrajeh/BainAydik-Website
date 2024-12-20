const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db");
const userRoutes = require("./routes/Users Routs/regesterRoutes");
const projectRouter = require("./routes/Projects Routs/projectsRout");
const loginRouter = require("./routes/Users Routs/loginRout");
const profileRouter = require("./routes/Users Routs/profileRout");
/* const employeeRoutes = require('./routes/employeeRoute'); */
const fs = require("fs");
const path = require("path");
const app = express();
/* app.use(cors({ origin: "http://localhost:3000" })); */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
connectDB();
app.use("/uploads", express.static("uploads"));
console.log("Server");
/* app.use('/api', employeeRoutes); */
app.use("/api", userRoutes);
app.use("/api", projectRouter);
app.use("/api", loginRouter);
app.use("/api", profileRouter);

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
