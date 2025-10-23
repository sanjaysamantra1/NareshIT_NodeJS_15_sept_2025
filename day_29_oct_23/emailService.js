class EmailService {
    sendEmail(email,message) {
        console.log(`Email Sent to ${email}, with message ${message}`)
    }
}
module.exports = EmailService