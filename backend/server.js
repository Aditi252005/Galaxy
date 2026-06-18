require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

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


const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Backend running...");
});

//testing email




// Enquiry route
// app.post("/send-enquiry", async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   // Respond immediately
//   res.status(200).json({
//     success: true,
//     message: "Enquiry received successfully",
//   });

//   Promise.all([
//     transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "New Enquiry",
//       html: `
//         <h3>New Enquiry</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     }),

//     transporter.sendMail({
//       to: email,
//       subject: "We received your enquiry",
//       html: `
//         <h3>Hi ${name},</h3>
//         <p>Thank you for contacting Galaxy Modulars.</p>
//         <p>We have received your enquiry and our team will get back to you shortly.</p>

//         <br>

//         <p>Regards,</p>
//         <p><strong>Galaxy Windows & Modulars</strong></p>
//       `,
//     }),
//   ])
//     .then(() => {
//       console.log("Enquiry emails sent successfully");
//     })
//     .catch((err) => {
//       console.error("Enquiry email error:", err);
//     });
// });
app.post("/send-enquiry", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "digambarareinforcement@gmail.com", // temporary
      subject: `New Enquiry - ${name}`,
      html: `
        <h3>New Enquiry</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Enquiry received successfully",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry",
    });
  }
});

//careers
// app.post("/apply", upload.single("resume"), async (req, res) => {
//   const { name, email, position, phone } = req.body;
//   const file = req.file;
//   if (!file) {
//     return res.status(400).json({
//       success: false,
//       message: "Resume PDF is required",
//     });
//   }

//   // Respond immediately to the frontend
//   res.status(200).json({
//   success: true,
//   message: "Application received successfully",
// });

// Promise.all([
//   transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER,
//     subject: "New Job Application",
//     text: `
// Name: ${name}
// Email: ${email}
// Position: ${position}
// Phone: ${phone}
//     `,
//     attachments: [
//       {
//         filename: file.originalname,
//         path: file.path,
//       },
//     ],
//   }),

//   transporter.sendMail({
//     to: email,
//     subject: "Application Received",
//     text: `
// Thank you for applying to Galaxy Windows & Modulars.

// We have received your application and our team will review it shortly.

// We will contact you if your profile matches our requirements.

// Regards,
// Galaxy Windows & Modulars
//     `,
//   }),
// ])
// .then(() => {
//   if (file?.path && fs.existsSync(file.path)) {
//     fs.unlinkSync(file.path);
//   }

//   console.log("Application processed successfully");
// })
// .catch((err) => {
//   console.error("Application error:", err);

//   if (file?.path && fs.existsSync(file.path)) {
//     fs.unlinkSync(file.path);
//   }
// });
// });
app.post("/apply", upload.single("resume"), async (req, res) => {
  const { name, email, position, phone } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      success: false,
      message: "Resume PDF is required",
    });
  }

  // Respond immediately
  res.status(200).json({
    success: true,
    message: "Application received successfully",
  });

  try {
    const pdfBuffer = fs.readFileSync(file.path);

    // Email to Galaxy
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "digambarareinforcement@gmail.com", // Change later

      subject: `New Job Application - ${name}`,

      html: `
        <h2>New Job Application</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
      `,

      attachments: [
        {
          filename: file.originalname,
          content: pdfBuffer.toString("base64"),
        },
      ],
    });

    // Auto reply (testing mode)
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aditisingh25000@gmail.com",

      subject: "Application Received",

      html: `
        <h2>Thank you for applying</h2>

        <p>We have received your application and our team will review it shortly.</p>

        <p>
          We will contact you if your profile matches our requirements.
        </p>

        <br/>

        <p>
          Regards,<br/>
          Galaxy Windows & Modulars
        </p>
      `,
    });

    if (fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }

    console.log("Application processed successfully");

  } catch (err) {
    console.error("Application error:", err);

    if (file?.path && fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }
  }
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

