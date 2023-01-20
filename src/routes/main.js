const express = require('express');
const {home, about, index} = require('../controllers/mainControllers');

const routerMain = express.Router();

routerMain.get('/', home);

routerMain.get('/index', index);

routerMain.get('/about', about);

module.exports = routerMain;