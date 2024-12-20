const mongoose = require("mongoose");

const connectDB = async () => {
 /*  try {
    await mongoose.connect(
      "mongodb+srv://shaimaa:b4ay8D1gpfYfMMK6@cluster0.kcmoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error", err);
    process.exit(1);
  } */
    try {
      await mongoose.connect(
        "mongodb+srv://ayat:bainaydik@cluster0.shqx4.mongodb.net/myDatabase?retryWrites=true&w=majority"
      );
      console.log("Database connected");
    } catch (err) {
      console.error("Database connection error", err);
      process.exit(1);
    }
};

module.exports = connectDB;
