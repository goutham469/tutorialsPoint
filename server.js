const exp = require("express")
const app = exp();

const mclient = require('mongodb').MongoClient
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send("Hi , I am tutorials point server speacking")
})

console.log(process.env.MONGO_DB_URL)

mclient.connect(`${process.env.MONGO_DB_URL}`).then(client=>{
    const DB = client.db('tutorialsPoint')
    const usersCollection = DB.collection('users')
    
    app.set('usersCollection',usersCollection)

    console.log("mongo DB connection successfull")
})




app.listen(4000,()=>{console.log("Server running on port 4000...")})