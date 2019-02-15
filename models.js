const Sequelize = require('sequelize')
//const path = 

const conn = new Sequelize('postgres://localhost:5432/plantr')

//conn.sync({force: true})



const Gardner = conn.define("gardener", {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Vegetable = conn.define('vegetable', {
    name:Sequelize.STRING,
    color:Sequelize.STRING,
    planted_on: Sequelize.DATE
})



module.exports = conn