require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_DIALECT, PGHOST, PGPORT, PGNAME, PGPASSWORD, PGUSER } = process.env;

const sequelize = new Sequelize(
  `${DB_DIALECT}://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGNAME}`,

  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Users, Products, Reviews, Payments, Category, Compras } =
  sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Products.belongsToMany(Category, { through: "products_categories" });
Category.belongsToMany(Products, { through: "products_categories" });
Products.belongsToMany(Users, { through: "favorites" });
Users.belongsToMany(Products, { through: "favorites" });

Users.hasMany(Reviews);
Reviews.belongsTo(Users);
Reviews.belongsTo(Products);
Products.hasMany(Reviews);

const DetalleCompras = sequelize.define(
  "detalle_Compras",
  {
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Products.belongsToMany(Compras, { through: DetalleCompras });
Compras.belongsToMany(Products, { through: DetalleCompras });

Users.hasMany(Compras);
Compras.belongsTo(Users);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
