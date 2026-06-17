const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF allowed"), false);
    }
  }
});
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Verify Error:", error);
  } else {
    console.log("SMTP Ready");
  }
});
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// Enquiry route
app.post("/send-enquiry", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Respond immediately
  res.status(200).json({
    success: true,
    message: "Enquiry received successfully",
  });

  Promise.all([
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }),

    transporter.sendMail({
      to: email,
      subject: "We received your enquiry",
      html: `
        <h3>Hi ${name},</h3>
        <p>Thank you for contacting Galaxy Modulars.</p>
        <p>We have received your enquiry and our team will get back to you shortly.</p>

        <br>

        <p>Regards,</p>
        <p><strong>Galaxy Windows & Modulars</strong></p>
      `,
    }),
  ])
    .then(() => {
      console.log("Enquiry emails sent successfully");
    })
    .catch((err) => {
      console.error("Enquiry email error:", err);
    });
});


//careers
app.post("/apply", upload.single("resume"), async (req, res) => {
  const { name, email, position, phone } = req.body;
  const file = req.file;
  if (!file) {
    return res.status(400).json({
      success: false,
      message: "Resume PDF is required",
    });
  }

  // Respond immediately to the frontend
  res.status(200).json({
  success: true,
  message: "Application received successfully",
});

Promise.all([
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Job Application",
    text: `
Name: ${name}
Email: ${email}
Position: ${position}
Phone: ${phone}
    `,
    attachments: [
      {
        filename: file.originalname,
        path: file.path,
      },
    ],
  }),

  transporter.sendMail({
    to: email,
    subject: "Application Received",
    text: `
Thank you for applying to Galaxy Windows & Modulars.

We have received your application and our team will review it shortly.

We will contact you if your profile matches our requirements.

Regards,
Galaxy Windows & Modulars
    `,
  }),
])
.then(() => {
  if (file?.path && fs.existsSync(file.path)) {
    fs.unlinkSync(file.path);
  }

  console.log("Application processed successfully");
})
.catch((err) => {
  console.error("Application error:", err);

  if (file?.path && fs.existsSync(file.path)) {
    fs.unlinkSync(file.path);
  }
});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

