const { Users, Products } = require("../db.js");
const { getProductByIdCompras } = require("./ProductsControllers.js");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await Users.findAll();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
};

const postUsers = async (req, res, next) => {
  const { name, email, avatar, password } = req.body;
  try {
    const getAll = await Users.findAll();
    const getEmail = getAll.map((e) => e.email);
    if (!getEmail.find((e) => e === email)) {
      const obj = { name, email, avatar, password };
      const newUser = await Users.create(obj);

      res.json(newUser);
    } else {
      return res.json({ message: "Usuario ya existente" });
    }
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, avatar, password, active, category, compras } = req.body;
  try {
    const obj = { name, email, avatar, password, active, category, compras };
    const userUpdate = await Users.update(obj, {
      where: {
        id: id,
      },
    });
    res.json({ modificado: true });
  } catch (error) {
    next(error);
  }
};

const verifyUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findOne({ where: { id: id } });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }
    const obj = {
      status: "VERIFIED",
    };
    await Users.update(obj, {
      where: { id: id },
    });
    res.json({
      ok: true,
      msg: "Usuario verificado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al verificar usuario",
    });
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findOne({
      where: {
        id: id,
      },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const confirm = async (req, res) => {
  try {
    const { token } = req.params;

    const data = getTokenData(token);
    console.log(data);
    if (data === null) {
      res.status(400).send("Token no valido");
    }

    const { email, code } = data.data;
    const user = (await Users.findOne({ where: { email } })) || null;

    if (user === null) {
      res.status(400).send("Usuario no existente");
    }
    if (code !== user.code) {
      console.log("Código no válido");
    }

    user.status = "VERIFIED";
    await Users.create(user);
  } catch (error) {
    console.log(error);
  }
};

const getCompras = async (req, res, next) => {
  let { compras } = req.params;
  compras = compras.split(",");
  let products = [];
  try {
    for (const idProduct of compras) {
      products.push(await getProductByIdCompras(idProduct));
    }

    res.json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  postUsers,
  updateUser,
  getUserById,
  confirm,
  verifyUser,
  getCompras,
};
