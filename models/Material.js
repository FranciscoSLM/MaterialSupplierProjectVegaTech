const db = require('./Db');
//Create table for Material
//Each parameter creates a column on the database
const Material = db.sequelize.define('material',{
    IdSupplier:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references:{
            model:'suppliers',
            key:'id'
        }
    },
    Name:{
        type: db.Sequelize.STRING
    },
    Code:{
        type: db.Sequelize.STRING
    },
    Description:{
        type: db.Sequelize.STRING
    },
    FiscalCode:{
        type: db.Sequelize.STRING
    },
    Specie:{
        type: db.Sequelize.STRING
    },
    CreatedBy:{
        type: db.Sequelize.STRING
    },
    UpdatedBy:{
        type: db.Sequelize.STRING
    }
});
Material.sync();
module.exports = Material;