const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const clicks = sequelizeClient.define("clicks", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
    },
    campaign_id: {
      type: DataTypes.UUID,
    },
  });

  return clicks;
};
