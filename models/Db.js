const Sequelize = require('sequelize')
//Initialize first database connection
//Insert your root password after the 'root' string
    const sequelize = new Sequelize('VegaTech','root','INSERT ROOT PASSWORD HERE',{
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    })
    
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}