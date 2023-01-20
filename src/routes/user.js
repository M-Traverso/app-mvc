const express = require('express');
const { getUserByName, getAllUsers, getUserId} = require('../controllers/userController');

const routerUser = express.Router();

routerUser.get('/users', getAllUsers);
routerUser.get('/users/:id', getUserId);
routerUser.get('/users/:name', getUserByName);

module.exports = routerUser;