// Edge Function: Booking Trigger
// Handles post-booking actions (email, webhook, etc.)
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, email, phone, date, service } = req.body;
  // Example: send confirmation email (replace with your SMTP config)
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: BRAND.texts.buttons.reservar + ' Confirmation',
      text: `Thank you, ${name}, for booking ${service} on ${date}. We will contact you at ${phone}.`,
    });
    // You can add webhook logic here as well
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: BRAND.texts.ui.error });
  }
}
