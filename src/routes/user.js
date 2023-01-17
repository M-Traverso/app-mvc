const express = require('express');
const { getUserByName, getAllUsers, getUserId} = require('../controllers/userController');

const routerUser = express.Router();

routerUser.get('/users', getAllUsers);
routerUser.get('/user/:id', getUserId);
routerUser.get('/user/:name', getUserByName);

module.exports = routerUser;