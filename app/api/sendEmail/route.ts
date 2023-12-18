import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const body = await req.json();

    const { email, phone, subject, message } = body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        }
    });

    // Email content
    const mailOptions = {
        from: email,
        to: process.env.NODEMAILER_EMAIL,
        subject: `${subject}`,
        html: `
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `
    };


    // Send the email
    try {
        const info = await transporter.sendMail(mailOptions);
        return new NextResponse('Email sent!');
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal server error", { status: 500 })
    }
}