const user = require('../Controllers/Person');

const Router = require('express').Router();


Router.post('/new', user.create);
Router.post('/login', user.logIn);




module.exports = Router;