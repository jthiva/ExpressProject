const Express = require("express");
const app = Express();

const BodyParser = require("body-parser");

const Routes = require("./Routes");

app.use(BodyParser.json());
app.use("/", Routes);

app.listen(8083, "localhost", function(err) {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  console.log("Server listening on port 8083");
});
