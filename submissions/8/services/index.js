const accounts = require("./accounts/accounts.service");
const campaigns = require("./campaigns/campaigns.service");
const clicks = require("./clicks/clicks.service");
module.exports = function (app) {
  app.configure(accounts);
  app.configure(campaigns);
  app.configure(clicks);
};
