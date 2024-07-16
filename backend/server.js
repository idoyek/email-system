const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb://127.0.0.1:27017/email-system";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/api/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ status: "failure" });
  }
});

app.post("/api/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
  
      if (user) {
        res.status(200).json({
          status: "success",
        });
      } else {
        res.status(401).json({
          status: "failure",
          message: "Invalid email or password",
        });
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ status: "failure", message: "Server error" });
    }
  });  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
