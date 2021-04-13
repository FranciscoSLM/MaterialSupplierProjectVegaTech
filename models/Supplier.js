const db = require('./Db');
//Create table for Supplier
//Each parameter creates a column on the database
const Supplier = db.sequelize.define('supplier',{
    Name:{
        type: db.Sequelize.STRING
    },
    CNPJ:{
        type: db.Sequelize.STRING
    },
    ZipCode:{
        type: db.Sequelize.STRING
    },
    QrCode:{
        type: db.Sequelize.STRING
    },
});
Supplier.sync();
module.exports = Supplier;