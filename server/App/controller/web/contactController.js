const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "nakesh270704@gmail.com",
        pass: "chnwidxrpgbjrpcl",
    },
});

exports.saveForm = async (request, response) => {
    const info = await transporter.sendMail({
        from: '"Enquiry Mail 👻" <nakesh270704@gmail.com>', // sender address
        to: "nakeshaswani27@gmail.com", // list of receivers
        subject: "Enquiry Mail | Nakesh Aswani", // Subject line
        text: "Hello world?", // plain text body
        html: `<table border="1" cellpadding="10">
        <tr>
        <th>Name</th>
        <td>${request.body.fName} ${request.body.lName}</td>
        </tr>
        <tr>
        <th>Email</th>
        <td>${request.body.email}</td>
        </tr>
        <tr>
        <th>Phone</th>
        <td>${request.body.phone}</td>
        </tr>
        <tr>
        <th>Message</th>
        <td>${request.body.message}</td>
        </tr>
        </table>`, // html body
    });
    response.send({ status: 1, message: "dataSave" })
}