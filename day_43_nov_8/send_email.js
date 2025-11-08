const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "sanjaysamantra2@gmail.com",
        pass: "oiug hmtp wwiw csbq", // google app password
    },
});
const name = 'nitin'
const sendMyEmail = async () => {
    const info = await transporter.sendMail({
        from: '"Sanjay Samantra" sanjaysamantra2@gmail.com',
        to: ['rehman.shaik2008@gmail.com', 'ravikiran.pedapudi87@gmail.com'],
        subject: "Test Email Using NodeJS",
        html: `
                <h1>Hello  ${name}</h1>
                <h1>This is a Test Email</h1>
                <h3 style='color:red'>Congratulations!!!</h3>
                <p>Please follow the below instructions to claim your amount</p>

                <pre>
                    Hellooooooooooo
                    Hiiiiiiiiiiii
                    Good Morning
                </pre>
            `, // HTML body
        attachments: [
            { filaname: 'profile.png', path: './profile.png' }
        ]
    });

    console.log("Message sent Succesfully:", info.messageId);
}

sendMyEmail();