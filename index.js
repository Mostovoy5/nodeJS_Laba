const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try{
        await mongoose.connect('mongodb+srv://most:12345@cluster0.cyava.mongodb.net/mostovoy?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log('Сервер стартував'))
    }catch(e){
        console.log(e)
    }
}

start()