const { Sequelize } = require("sequelize");   
require("dotenv").config();

var db = {}

const sequelize = new Sequelize(

  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

async function setupDB(){
 db.Users = require("./models/users");

  await sequelize.sync({ force: false });
}

module.exports = {
  db,
  setupDB,
  sequelize
};
