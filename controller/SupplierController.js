const express = require ('express');
const router = express.Router();
const handlebars = require ('express-handlebars');
const bodyParser = require ('body-parser');
const Supplier = require('../models/Supplier');

//Creates all routes for Supplier related screens
//each being identified by the router.get('x')
//x being the route

router.get('/',function(req,res){
    Supplier.findAll().then(function(supplierList){
        res.render('supplierList', {title:'| Suppliers',supplier:supplierList})
    }).catch(function(erro){
        res.send(erro);
    })
});

router.get('/create',function(req,res){
    Supplier.findAll().then(function(supplierList){
        res.render('supplierCreation', {title:'| Supplier Registration',supplier:supplierList})
    }).catch(function(erro){
        res.send(erro);
    })
});

router.post('/create/add',function(req,res){
    let timeElapsed = Date.now();
    let date= new Date(timeElapsed);

    Supplier.create({
        Name: req.body.Name,
        CNPJ: req.body.CNPJ,
        ZipCode: req.body.ZipCode,
        QrCode: `%${req.body.CNPJ}% - %${req.body.ZipCode}% /CAD.%${date.toLocaleDateString()}%`
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send(erro)
    })
});

router.post('/update',function(req,res){
    let timeElapsed = Date.parse(req.body.createdAt);
    let date= new Date(timeElapsed);

    Supplier.update({
        Name: req.body.Name,
        CNPJ: req.body.CNPJ,
        ZipCode: req.body.ZipCode,
        QrCode: `%${req.body.CNPJ}% - %${req.body.ZipCode}% /CAD.%${date.toLocaleDateString()}%`
    },{where:{'id':req.body.id}}).then(function(){
        res.redirect('/supplier')
    }).catch(function(erro){
        res.send(erro)
    })
});

router.get('/update/:id',function(req,res){
    Supplier.findAll({where:{'id': req.params.id}}).then(function(post){
       res.render('supplierUpdate', {post:post, title:'| Supplier Update'})
    }).catch(function(erro){
        res.send(erro)
    });
});

router.get('/delete/:id',function(req,res){
    Supplier.destroy({where:{'id': req.params.id}}).then(function(){
        res.redirect('/supplier')
    }).catch(function(erro){
        res.send(erro)
    })
});

module.exports = router;