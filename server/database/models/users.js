const bcrypt = require("bcrypt")
const { DataTypes } = require("sequelize")
const { sequelize } = require("../")

const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(255),
      allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

User.beforeCreate(async (user) => {
const salt = await bcrypt.genSaltSync(10);
 user.password = bcrypt.hashSync(user.password, salt);
 });


module.exports = User;
