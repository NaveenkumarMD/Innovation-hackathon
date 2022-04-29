import nodemailer from "nodemailer"

const sendmail = async (details) => {
    return new Promise(async (resolve, reject) => {
        let mailoptions = {
            from: "archivedevps@gmail.com",
            to: details.to,
            text: details.body,
            subject: details.subject
        }
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "archivedevps@gmail.com",
                pass: "8870499146"
            }
        })
        transporter.sendMail(mailoptions, (err, info) => {
            if (err) {
                console.log(err)
                reject("Error sending mail")
            }
            resolve("Mail sent")
        })
    })
}
export default sendmail