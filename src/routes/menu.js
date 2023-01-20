const express = require('express');
const {detalle} = require('../controllers/menuController');

const routerMenu = express.Router();

routerMenu.get('/index/detalle/:id', detalle);

module.exports = routerMenu;

