import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    secure: false,
    auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
    }
});

export const emailAlert = async (req, res) => {
    const {email, subject, message} = req.body;

    if(!email || !subject || !message) {
        return res.status(400).json({success: false, message: "Please provide all the fields"});
    }
    try {
        const info = await transporter.sendMail({
            from: '<maddison53@ethereal.email>', 
            to: email,
            subject: subject,
            text: message,
            html:`<b>${message}</b>`,
        });
        console.log("Message sent successfully : ", info.messageId);
        return res.status(200).json({success: true, message: "Message sent successfully", info});
    }
    catch (error) {
        console.log("Something went wrong sending the email");
        return res.status(500).json({success: false, message: "Failed to send the email"});
    }
}