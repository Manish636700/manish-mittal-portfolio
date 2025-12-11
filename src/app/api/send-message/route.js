import nodemailer from 'nodemailer';

export async function POST(req) {
    console.log("DEBUG ENV:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS ? "LOADED" : "MISSING",
  });

  try {
    const body = await req.json();
    const { name, email, company = "", website = "", message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }


    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      family: 4,
    });


    const mailHtml = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${sanitize(name)}</p>
      <p><strong>Email:</strong> ${sanitize(email)}</p>
      <p><strong>Company:</strong> ${sanitize(company)}</p>
      <p><strong>Website:</strong> ${sanitize(website)}</p>
      <p><strong>Message:</strong><br/>${sanitize(message).replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `Contact message from portfolio website: ${name}`,
      html: mailHtml,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

function sanitize(input = "") {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
