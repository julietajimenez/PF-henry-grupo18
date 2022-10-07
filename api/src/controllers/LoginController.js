const bcrypt = require("bcrypt");
const { Users } = require("../db.js");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer')

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await Users.findOne({ where: { email: email } }).then((usuario) => {
      if (!usuario) {
        return res.json({ mensaje: "Usuario no encontrado" });
      }

      bcrypt.compare(password, usuario.password).then((esCorrecta) => {
        if (esCorrecta) {
          const { id, name, email } = usuario;

          const data = {
            id,
            name,
            email,
          };

          const token = jwt.sign(data, "secreto", {
            expiresIn: 86400 /* 24hs */,
          });

          res.json({
            mensaje: "Usuario logueado correctamente",
            usuario: {
              id,
              name,
              email,
              token,
            },
          });
        } else {
          return res.json({ mensaje: "password incorrecta" });
        }
      });
    });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { name, email, avatar, password } = req.body;

    Users.findOne({ where: { email: email } }).then((usuario) => {
      if (usuario) {
        return res.json({ mensaje: "Ya existe un usuario con ese email" });
      } else if (!name || !email || !password) {
        return res.json({ mensaje: "Falta el nombre / email / password" });
      } else {
        bcrypt.hash(password, 10, async (error, passwordHasheada) => {
          if (error) res.json({ error });
          else {
            const nuevoUsuario = {
              name,
              email,
              avatar,
              password: passwordHasheada,
            };

            await Users.create(nuevoUsuario);

            const id = await Users.findOne({where:{
              email
            }})


            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "gudombe@gmail.com",
                pass: "ynxzwinkopmxvxol",
              },
            });
            const mailOptions = {
              from: "Pure Glow ",
              to: nuevoUsuario.email,
              subject: "¡Bienvenida/o a Pure Glow!",
              text:
                "¡Hola " +
                nuevoUsuario.name +
                "!" +
                "\n\n" +
                "Gracias por registrarse en Pure Glow.\n" +
                "Para confirmar su registro, ingrese al siguiente link:\n\n" +
                "http://localhost:3000/verify/" +
                id.dataValues.id +
                "\n\n" +
                "Si el link no funciona, copia y pega el link en tu navegador.\n\n" +
                "Si recibió este correo por error, ignore este mensaje.\n" +
                "Gracias,\n" +
                "Pure Glow",
            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });
            console.log(id.dataValues.id);

            res.json({ mensaje: "Usuario creado correctamente", nuevoUsuario });
          }
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, register };
