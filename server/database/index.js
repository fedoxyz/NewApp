const { Sequelize, DataTypes } = require("sequelize");   
const bcrypt = require("bcrypt"); 
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
 db.User = require("./models/users"); 
}

module.exports = {
  db,
  setupDB,
  sequelize
};
