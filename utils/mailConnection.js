const nodemailer = require("nodemailer");


function connectMail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ombs24s3@gmail.com",
      pass: "dbms@123",
    },
  });
  return transporter;
}

module.exports = {
  connectMail: connectMail,
};
