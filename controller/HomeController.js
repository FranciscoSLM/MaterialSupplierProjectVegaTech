const express = require ('express');
const router = express.Router();
const handlebars = require ('express-handlebars');
const bodyParser = require ('body-parser');
const Supplier = require ('../models/Supplier')
const Material = require ('../models/Material')

//Creates the main page route, identified by the '/'
router.get('/',function(req,res){
    res.render('home',{css: 'home.css'})
});

module.exports = router;