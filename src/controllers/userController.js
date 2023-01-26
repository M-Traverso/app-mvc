const users = require('../database/users');
const path= require('path');

const getAllUsers =  (req,res) => {
    res.render('users',{'allUsers':users});
}

const getUserId = (req,res) => {
    const {id} = req.params;
    const user = users.find(elem => elem.id == id);
    if(user){
        res.render('userDetail',{user});
    }else{
        res.send('Not found');
    };
}

const getUserByName = (req,res) => {
    const {name} = req.params;
    const user = users.find(elem => elem.name.includes(name));
    if(user.length){
        res.send(user);
    }else{
        res.send('Not found')
    };
}

module.exports = {
    getAllUsers,
    getUserId,
    getUserByName,
};