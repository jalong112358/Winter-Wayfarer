const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const secrets = require("./config/secrets");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const validateInput = require("./form-validation");

app.post("/api/form", (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    return res.json([errors, false, false]);
  } else {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,

      auth: {
        user: secrets.email,
        pass: secrets.emailPassword
      }
    });

    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
      </ul>
      <h3>Message:</h3>
      <p>${req.body.message}</p>
      `;

    let mailOptions = {
      from: req.body.email,
      to: secrets.email,
      replyTo: req.body.email,
      subject: req.body.message,
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return res.json([errors, false, true]);
      } else {
        return res.json([errors, true, false]);
      }
    });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
