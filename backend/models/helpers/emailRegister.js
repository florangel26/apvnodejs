import nodemailer from "nodemailer";

const emailRegirter = (datos)  => {
// Looking to send emails in production? Check out our Email API/SMTP product!
consttransport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

 console-log(datos)
}

 export default emailRegirter