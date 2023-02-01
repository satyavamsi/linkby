const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const campaigns = sequelizeClient.define("campaigns", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
    },
    account_id: {
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  return campaigns;
};
