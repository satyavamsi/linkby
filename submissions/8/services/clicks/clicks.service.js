const createService = require("feathers-sequelize");
const createModel = require("../../models/clicks.model");

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    Model,
  };

  // Initialize our service with any options it requires
  app.use("/clicks", createService(options));
};
