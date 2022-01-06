
const express = require('express')
const path = require('path')
const api = require('./server/routes/api')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL||'mongodb://localhost/NASADB', { useNewUrlParser: true })
    .then(() => console.log("connected")).catch((error) => console.log(error))

const app = express()
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

let port = 3001


app.use('/', api)

app.listen(process.env.PORT || port, function(request, response){
    console.log(`Server is up and running smoothly`)
})