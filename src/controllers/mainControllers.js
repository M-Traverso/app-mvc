const menu = require('../database/menu');

const home =  (req,res) => {
    res.render('home')
}

const index =  (req,res) => {
    res.render('index',{'menu':menu})
}

const about = (req,res) => {
    res.render('about')
}



module.exports = {
    home,
    about,
    index
};