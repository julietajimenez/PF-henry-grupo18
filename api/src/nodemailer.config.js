const nodemailer = require("nodemailer");




































// const mail = {
//   user: "henrypfg02@gmail.com",
//   password: "HenryPF02",
// };

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   tls: {
//     rejectUnauthorized: false,
//   },
//   secure: true, // use SSL
//   auth: {
//     type: "login",
//     user: mail.user,
//     pass: mail.password,
//   },
// });

// const sendEmail = async (email, subject, html) => {
//   try {
//     await transporter.sendMail({
//       from: `PURE GLOW <${mail.user}>`, // sender address
//       to: email, // list of receivers
//       subject, // Subject line
//       text: "¡Te has registrado con éxito", // plain text body
//       html, // html body
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getTemplate = (name, token) => {
//   return `
      
//       <div id="email___content">
//           <img src="https://i.imgur.com/eboNR82.png" alt="">
//           <h2>Hola ${name}</h2>
//           <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
//           <a
//               href="http://localhost:3001/api/user/confirm/${token}"
//               target="_blank"
//           >Confirmar Cuenta</a>
//       </div>
//     `;
// };

module.exports = {
  sendEmail,
  getTemplate,
};
// send mail with defined transport object
