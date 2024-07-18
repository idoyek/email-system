const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
// app.use(cookieParser());

const User = require("./models/user");
const Mail = require("./models/mail");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password
    });
    await newUser.save();

    // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });
    // res.cookie("token", token, { httpOnly: false, maxAge: 3600000 }); // 1 hour

    res.status(201).json({
      status: "success",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ status: "failure" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "failure",
        message: "Invalid email or password",
      });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password === user.password;
    if (isMatch) {
    //   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //     expiresIn: "1h",
    //   });
    //   res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

      res.status(200).json({
        status: "success",
        user: user,
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

// const authenticateToken = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res
//       .status(401)
//       .json({ status: "failure", message: "Not authenticated" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res
//         .status(403)
//         .json({ status: "failure", message: "Invalid token" });
//     }
//     req.user = user;
//     next();
//   });
// };

app.get("/api/email", async (req, res) => {
  try {
    const { currentUserEmail, selectedEmailCategory } = req.query;
    console.log("Received request - currentUser:", currentUserEmail, "selectedEmailCategory:", selectedEmailCategory);
    let query = {};

    if (selectedEmailCategory === "inbox") {
      query.to = currentUserEmail;
    } else if (selectedEmailCategory === "outbox") {
      query.fromEmail = currentUserEmail;
    } else if (selectedEmailCategory === "draft") {
      // TODO
    }

    const emails = await Mail.find(query);
    console.log("emails:", emails);

    res.status(200).json({
      status: "success",
      emails: emails,
    });
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).json({ status: "failure", message: "Server error" });
  }
});

app.post("/api/email", async (req, res) => {
  try {
    const { from, fromEmail, to, cc, subject, text, time } = req.body;
    const newMail = new Mail({ from, fromEmail, to, cc, subject, text, time });
    await newMail.save();

    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    console.error("Error saving email:", error);
    res.status(500).json({ status: "failure", message: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
