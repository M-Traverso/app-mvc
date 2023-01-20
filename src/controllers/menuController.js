const menu = require('../database/menu');

const detalle = (req,res) => {
    const {id} = req.params;
    const dish = menu.find(elem => elem.id == id);
    if(dish){
        res.render('detalleMenu', {'menu':menu});
    }else{
        res.send("Not found");
    }
    
}

module.exports = {
    detalle
};