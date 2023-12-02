const { DataTypes } = require("sequelize");
const db = require("../db/index.js");

const QnA = db.sequelize.define(
  "qna",
  {
    id: {
      type: DataTypes.STRING(12),
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
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    tableName: "qna",
    timestamps: false,
  }
);

module.exports = QnA;
