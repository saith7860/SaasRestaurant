// import nodemailer from "nodemailer";

// interface SendEmailOptions {
//   to: string;
//   subject: string;
//   html: string;
// }

// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: Number(process.env.EMAIL_PORT),
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sendEmail = async ({ to, subject, html }: SendEmailOptions) => {
//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_FROM,
//       to,
//       subject,
//       html,
//     });

//     console.log(`Email sent successfully to ${to}`);
//   } catch (error) {
//     console.log("Email sending failed:", error);
//   }
// };
import { Resend } from "resend";

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  to,
  subject,
  html,
}: SendEmailOptions) => {
  try {
      console.log("EMAIL FROM : ",process.env.EMAIL_FROM)
    const { data, error } = await resend.emails.send({
      from:process.env.EMAIL_FROM as string,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Email sending failed:", error);
    }

    console.log(`Email sent successfully to ${to}`);
    console.log("Resend email ID:", data?.id);

    return data;
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};