// Initializes the `users` service on path `/users`
const createService = require("feathers-sequelize");
const createModel = require("../../models/campaigns.model");

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    Model,
  };

  // Initialize our service with any options it requires
  app.use("/campaigns", createService(options));

  app.service("campaigns").before({
    get(context) {
      if (context.id === 10) {
        throw new Error("Forbidden");
      }
      return context;
    },
  });
};
