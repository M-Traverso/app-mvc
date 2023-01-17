const users = require('../database/users')

const getAllUsers =  (req,res) => {
    res.send()
}

const getUserId = (req,res) => {
    const {id} = req.params;
    const user = users.find(elem => elem.id == id);
    if(user){
        res.send(user);
    }else{
        res.send('Not found')
    }
    res.send(id);
}

module.exports = {
    getAllUsers,
    getUserId
}