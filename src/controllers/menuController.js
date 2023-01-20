const menu = require('../database/menu');

const detalle = (req,res) => {
    res.render('detalleMenu', {'menu':menu});
}

module.exports = {
    detalle
};