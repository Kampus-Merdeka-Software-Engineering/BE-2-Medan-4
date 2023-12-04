// models/QnA.js
const { DataTypes } = require("sequelize");
const db = require("../db/index.js");

const QnA = db.sequelize.define("QnAs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = QnA;
