const user = require('./../Controllers/User');

const Router = require('express').Router();


Router.post('/new', user.create);
Router.get('/getAll', user.get);
Router.delete('/:_id', user.delete);
Router.put('/:_id', user.update);



module.exports = Router;