// db/index.js
const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("group_4", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const db = {};
db.sequelize = sequelize;

module.exports = db;
