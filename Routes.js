const Express = require("express");

var Routes = Express.Router();
var UserRoute = require('./UserController/User.Route');

Routes.use('/user/', UserRoute);
module.exports = Routes;