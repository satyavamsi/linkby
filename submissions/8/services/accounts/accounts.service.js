const createService = require("feathers-sequelize");
const createModel = require("../../models/accounts.model");
const hooks = require("./accounts.hooks");

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    Model,
  };

  app.use("/accounts", createService(options));

  const service = app.service("accounts");

  service.hooks(hooks);
};
