// const bcrypt = require("bcrypt");
// const { Users } = require('../db.js')
// const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  // const { email, password } = req.body;

  // Users.findOne({ email }).then((usuario) => {
  //   if (!usuario) {
  //     return res.json({ mensaje: "Usuario no encontrado" });
  //   }

  //   bcrypt.compare(password, usuario.password).then((esCorrecta) => {
  //     if (esCorrecta) {
  //       const { id, nombre } = usuario;

  //       const data = {
  //         id,
  //         nombre,
  //       };

  //       const token = jwt.sign(data, "secreto", {
  //         expiresIn: 86400 /* 24hs */,
  //       });

  //       res.json({
  //         mensaje: "Usuario logueado correctamente",
  //         usuario: {
  //           id,
  //           nombre,
  //           token,
  //         },
  //       });
  //     } else {
  //       return res.json({ mensaje: "password incorrecta" });
  //     }
  //   });
  // });
};

// module.exports = login;