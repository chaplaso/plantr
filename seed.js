const db = require('./models')

db.sync({force: true})
.then( _ => {
    console.log('Database Synced Successfully')
})
.catch(err =>{
    console.log('Disaster! Something went wrong!')
    console.log(err)
})
