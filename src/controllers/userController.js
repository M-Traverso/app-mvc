const users = require('../database/users');
const path= require('path');
const { render } = require('ejs');
const {validationResult} = require('express-validator');

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

const search = (req,res) => {
    const {name} = req.query;

    const user = users.filter(elem => elem.name.toUpperCase().includes(name.toUpperCase()));

    user.length !=0 ? res.render(path.join(__dirname,'../../views/userDetail'), {user}) : res.status(404);
}

const formNewUser = (req,res) => {

    res.render(path.join(__dirname,'../../views/formNewUser'));

};

const postUser = (req,res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const {
            name,
            age
        } = req.body;
    
        const image = req.file ? req.file.filename : '';
        let newImage;
    
        if(image.length > 0){
            newImage = `images/usuarios/${image}`;
        }
        const newId = users[users.length -1].id +1;
    
        const obj = {
            id: newId,
            name,
            age,
            img: newImage
        };
    
        users.push(obj);
        res.redirect('/users');
    }else{
        res.render(path.join(__dirname,'../../views/formNewUser'),{errors: errors.array(), values: req.body});
    }


}

const userEdit = (req,res) => {
    const {id} = req.params;

    const userEdit = users.find(elem => elem.id == id);

    res.render(path.join(__dirname,'../../views/userEdit'), {userEdit});
};

const editConfirm = (req,res) => {

    users.forEach(elem => {
        if(elem.id == req.body.id){
            elem.name =req.body.name;
            elem.age = req.body.age;
            elem.img = req.body.img;
        }
    });

    res.redirect('/users')

}

const admin = (req,res) => {
    res.render(path.join(__dirname,'../../views/admin'));
};

module.exports = {
    getAllUsers,
    getUserId,
    getUserByName,
    search,
    formNewUser,
    postUser,
    userEdit,
    editConfirm,
    admin
};