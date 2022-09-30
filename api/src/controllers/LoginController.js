const bcrypt = require("bcrypt");
const { Users } = require('../db.js')
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        await Users.findOne({ email }).then((usuario) => {
            if (!usuario) {
                return res.json({ mensaje: "Usuario no encontrado" });
            }

            bcrypt.compare(password, usuario.password).then((esCorrecta) => {
                if (esCorrecta) {

                    const { id, name } = usuario;

                    const data = {
                        id,
                        name,
                    };

                    const token = jwt.sign(data, "secreto", {
                        expiresIn: 86400 /* 24hs */,
                    });

                    res.json({
                        mensaje: "Usuario logueado correctamente",
                        usuario: {
                            id,
                            name,
                            token,
                        },
                    });
                } else {
                    return res.json({ mensaje: "password incorrecta" });
                }
            })

        })

    } catch (error) {
        next(error)
    }


};


const register = async (req, res, next) => {
    try {

        const { name, email, password } = req.body;

        Users.findOne({ email }).then((usuario) => {
            if (usuario) {
                return res.json({ mensaje: "Ya existe un usuario con ese email" });
            } else if (!name || !email || !password) {
                return res.json({ mensaje: "Falta el nombre / email / password" });
            } else {
                bcrypt.hash(password, 10, (error, passwordHasheada) => {
                    if (error) res.json({ error });
                    else {
                        const nuevoUsuario = {
                            name,
                            email,
                            password: passwordHasheada,
                        };

                        Users.create(nuevoUsuario)

                        res.json({ mensaje: "Usuario creado correctamente", nuevoUsuario });

                    }
                });
            }
        });
    } catch (error) {
        next(error)

    }
};



module.exports = { login, register };