const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = "mongodb://127.0.0.1:27017/email-system";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create a model using the schema
const User = mongoose.model("User", userSchema);

app.post("/api/register", async (req, res) => {
  try {
    console.log(req.body);
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
