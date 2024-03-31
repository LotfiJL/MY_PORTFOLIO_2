const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors"); // Add this line

require("dotenv").config();

const app = express();

const PORT = 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add CORS middleware
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://LotfiJL:Lotfi123@cluster0.9xj1qor.mongodb.net/",
  {
    /*to be removed*/
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo DB connection error:"));

const submissionSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  topic: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

const Submission = mongoose.model("Submission", submissionSchema);

app.post("/submit-form", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, topic, message } = req.body;

  try {
    const submission = new Submission({
      firstName,
      lastName,
      email,
      phoneNumber,
      topic,
      message,
    });

    await submission.save();
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "lotfijellali0@gmail.com",
        pass: "ftbo atra mitg ygcm",
      },
      tls: {
        rejectUnauthorized: false, // Ignore SSL certificate verification
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log("Error verifying transporter:", error);
      } else {
        console.log("Transporter is ready to take our messages");
      }
    });

    const mailOptions = {
      from: "lotfijellali0@gmail.com",
      to: "lotfijellali40@gmail.com",
      subject: "New Form Submission",
      html: `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Topic: ${topic}</p>
        <p>Message: ${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error: Unable to send email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("Form submission successful");
      }
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Error: Unable to submit form");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});
