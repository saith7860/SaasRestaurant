import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('resend api key is',process.env.RESEND_API_KEY)
export const sendTestEmail = async () => {
  const { data, error } = await resend.emails.send({
    from: "Orderva <onboarding@resend.dev>",
    to: ["saithshaheer5@gmail.com"],
    subject: "Orderva test email",
    html: `
      <h1>Email is working 🎉</h1>
      <p>This email was sent from your Orderva backend using Resend.</p>
    `,
  });

  if (error) {
    console.error("Resend email error:", error);
  }

  console.log("Email sent successfully:", data);
  return data;
};