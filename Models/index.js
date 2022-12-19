




//************************** */ connection with the mysql********************************************* 

// require
const { Sequelize, DataTypes } = require('sequelize')






//creating the instance by using class 

const sequelize = new Sequelize('sequelize-db', 'root', 'root', {
    dialect: "mysql",
    host: "localhost"

})


// now we have to make sure we are successfully connected with db or not so for that need to do authentication 
// this we have done by using promises 

// sequelize.authenticate().then(()=>{
//     console.log("connection successful!")
// }).catch((err)=>{
//     console.log("error while connecting with db")
// })


// but sequelize generally uses async and await for that we have to create function

async function myfunction() {
    await sequelize.authenticate()
    console.log("connected with db suceessfully!")
}

myfunction()



const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

console.log(require('./users'));
db.user = require('./users')(sequelize, DataTypes);   // addition of table into db

//synchronising the table with mysql

db.sequelize.sync({ force: false }).then((data) => {
    console.log("table and model sync successfully!")
}).catch((e) => {
    console.log("error while syncing the table and model!")
})

module.exports = db;