const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
