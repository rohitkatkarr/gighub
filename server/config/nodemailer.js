// This file is used to configure nodemailer to send emails to users when they register or reset their password.

import nodemailer from 'nodemailer';

const tranporter = nodemailer.createTransport({

    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

export default tranporter;