const express = require ('express');
const router = express.Router();
const handlebars = require ('express-handlebars');
const bodyParser = require ('body-parser');
const Supplier = require ('../models/Supplier')
const Material = require ('../models/Material')

//Creates all routes for Material related screens
//each being identified by the router.get('x')
//x being the route

router.get('/',function(req,res){
    Material.findAll().then(function(materialList){
            res.render('materialList',{title:'| Material',materials: materialList})
    })
});

router.get('/create',function(req,res){
    Supplier.findAll().then(function(supplierList){
        res.render('materialCreation', {title:'| Material Registration',supplier:supplierList})
    }).catch(function(erro){
        res.send(erro);
    })
});

router.post('/create/add',function(req,res){
    Material.create({
        IdSupplier: req.body.IdSupplier,
        Code: req.body.Code,
        Name: req.body.Name,
        Description: req.body.Description,
        FiscalCode: req.body.FiscalCode,
        Specie: req.body.Specie
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send(erro)
    })
});

router.get('/create/returnsupplier',function(req,res){
    Supplier.findAll().then(function(suppliers){
        res.json(suppliers);
    }); 
})

router.post('/update',function(req,res){
    Material.update({
        IdSupplier: req.body.IdSupplier,
        Code: req.body.Code,
        Name: req.body.Name,
        Description: req.body.Description,
        FiscalCode: req.body.FiscalCode,
        Specie: req.body.Specie
    },{where:{'id':req.body.id}}).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send(erro)
    })
});
router.get('/update/:id',function(req,res){
    Material.findAll({where:{'id': req.params.id}}).then(function(material){
        Supplier.findAll().then(function(supplier){
            res.render('materialUpdate', {title:'| Material Update',material:material, supplier: supplier});
        })        
     }).catch(function(erro){
         res.send(erro)
     });
});
router.get('/delete/:id',function(req,res){
    Material.destroy({where:{'id': req.params.id}}).then(function(){
        res.redirect('/material')
    }).catch(function(erro){
        res.send(erro)
    })
});

module.exports = router;