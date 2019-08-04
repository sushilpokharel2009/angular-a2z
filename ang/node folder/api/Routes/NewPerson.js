const user = require('../Controllers/Person');

const Router = require('express').Router();


Router.post('/neww', user.create);
Router.post('/loginn', user.logIn);


module.exports = Router;