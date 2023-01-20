const express = require('express');
const morgan = require('morgan');
const routerMain = require('./src/routes/main');
const routerMenu = require('./src/routes/menu');
const routerUser = require('./src/routes/user');

const port = process.env.PORT || 3001;

const app = express();

app.set('view engine', 'ejs')
app.use(morgan('dev'));
app.use(express.static('public'));


app.use(routerMain);
app.use(routerUser);
app.use(routerMenu);

app.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));