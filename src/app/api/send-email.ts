import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        console.log('Method not allowed:', req.method);
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { to, subject, text, html } = req.body;

    // Create reusable transporter object
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or your email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    console.log('Transporter created:', { user: process.env.EMAIL_USER });
    try {
        // Send mail
        await transporter.sendMail({
            from: `"Your Company" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
            html,
        });
        console.log('Email sent successfully:', { to, subject, text, html });
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending email' });
    }
}