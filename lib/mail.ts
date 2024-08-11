import { AppointmentData } from "@/types/appointment";
import dayjs from "dayjs";
import * as nodemailer from "nodemailer";

export const sendContactMail = (data: AppointmentData) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.RECEIVE_MAIL,
    subject: data.subject,
    text:
      "Date de rendez-vous : " +
      dayjs(data.date.toString()).format("DD/MM/YYYY à hh:mm") +
      ".\n Contenu message : \n" +
      data.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email Sent", info);
      return true;
    }
  });
};
