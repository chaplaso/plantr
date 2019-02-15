const Sequelize = require('sequelize')
//const path = 

const conn = new Sequelize('postgres://localhost:5432/plantr')

//conn.sync({force: true})



const Gardner = conn.define("gardener", {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = conn.define('plot', {
    size: Sequelize.STRING,
    shaded:Sequelize.BOOLEAN
})

const Vegetable = conn.define('vegetable', {
    name:Sequelize.STRING,
    color:Sequelize.STRING,
    planted_on: Sequelize.DATE
})

Plot.belongsTo(Gardner)
Gardner.hasOne(Plot)
Vegetable.belongsToMany(Plot,{through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Gardner.belongsTo(Vegetable, {as: 'favorite_vegetable'})



module.exports = conn