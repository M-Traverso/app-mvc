const express = require('express');
const {getAllUsers} = require('../controllers/userControllers');

const routerUser = express.Router();

routerUser.get('/users', getAllUsers);
routerUser.get('/user/:id', getUserId);

module.exports = routerUser;