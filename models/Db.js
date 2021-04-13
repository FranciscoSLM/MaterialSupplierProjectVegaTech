const Sequelize = require('sequelize')
//Initialize first database connection
    const sequelize = new Sequelize('VegaTech','root','8808',{
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    })
    
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}