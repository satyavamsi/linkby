/* eslint-disable no-console */
const app = require("./app");
const port = app.get("port");
const server = app.listen(port);

server.on("listening", () =>
  console.log(
    "Feathers application started on http://%s:%d",
    app.get("host"),
    port
  )
);
