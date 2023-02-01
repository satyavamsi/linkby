require("dotenv").config();

const feathers = require("@feathersjs/feathers");
const configuration = require("@feathersjs/configuration");
const express = require("@feathersjs/express");
const cors = require("cors");

const services = require("./services");
const appHooks = require("./app.hooks");

const sequelize = require("./sequelize");

const app = express(feathers());

app.configure(configuration());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.configure(express.rest());
app.configure(sequelize);

app.configure(services);

app.hooks(appHooks);

module.exports = app;
