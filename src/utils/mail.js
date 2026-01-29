import { text } from "express";
import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://managing.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHTML = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail@mailing.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHTML,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed. Make sure you have provided the correct credentials.",
    );
    console.error("Error: ", error);
  }
};

const emailVerificationMailgen = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro:
        "Welcome to Project Management Application! We're excited to have you onboard.",
      action: {
        instructions:
          "To verify your email please click on the following button",
        button: {
          color: "#0c16d4",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we\'d love to help.",
    },
  };
};

const passwordResetMailgen = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to change the password of your account.",
      action: {
        instructions: "To reset the password click on the following button",
        button: {
          color: "#06bb36",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we\'d love to help.",
    },
  };
};

export { emailVerificationMailgen, passwordResetMailgen, sendEmail };
