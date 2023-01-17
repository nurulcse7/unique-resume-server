// const nodeMailer = require("nodeMailer");
// const sendEmail = async (to, subject, text) => {
//   const transporter = nodeMailer.createTransport({
//     host: process.env.SMPT_HOST,
//     port: process.env.SMPT_PORT,
//     auth: {
//       user: process.env.SMPT_MAIL,
//       pass: process.env.SMPT_PASSWORD,
//     },
//   });
//   await transporter.sendEmail({
//     to,
//     text,
//     subject,
//     from: "coderrabbi@gamil.com",
//   });
// };
// module.exports = sendEmail;

const nodeMailer = require("nodemailer");
const Mailgen = require("mailgen");
const sendEmail = async (to, subject, text) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Unique Resume",
      link: "https://unique-resume.vercel.app",
    },
  });

  let email = {
    body: {
      intro:
        text ||
        "Welcome to Daily Tuition! We're very excited to have you on board.",
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
  let emailBody = MailGenerator.generate(email);
  const mailOptions = {
    to,
    subject,
    text,
    html: emailBody,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
