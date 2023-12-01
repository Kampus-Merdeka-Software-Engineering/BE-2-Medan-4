// models/FAQ.js
const { DataTypes } = require("sequelize");
const db = require("../db/index.js");

const FAQ = db.sequelize.define(
  "faq",
  {
    ticketId: {
      type: DataTypes.STRING(12),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "faq",
    timestamps: false,
  }
);

module.exports = FAQ;
