const express = require ('express');
const app = express();
const handlebars = require ('express-handlebars');
const bodyParser = require ('body-parser');
const HomeController = require('./controller/HomeController.js');
const SupplierController = require('./controller/SupplierController.js');
const MaterialController = require('./controller/MaterialController.js');

//Configuring bodyparser
 app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Setting the default template engine as handlebars
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars');

//Configuring the controllers
app.use(express.static(__dirname + "/public/"));
app.use('/', HomeController);
app.use('/supplier', SupplierController);
app.use('/material', MaterialController);

//Starting the server
app.listen(8081,function(){
    console.log('Server Running')
})