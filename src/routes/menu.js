const express = require('express');
const {detalle} = require('../controllers/menuControllers');

const routerMenu = express.Router();

routerMenu.get('/detalle/:id', detalle);

module.exports = routerMenu;

