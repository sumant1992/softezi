const express = require('express')
const bodyParser = require('body-parser')
const conn = require('./db')
const fileUpload = require('express-fileupload')
const userRouter = require('./routes/users/users')
const contestRouter = require('././routes/contest/contest')
const bannerRouter = require('./routes/admin/Banner')


const app = express()


app.use(express.json())
app.use(fileUpload())
app.use(bodyParser.urlencoded(
    { extended:false }
))

app.use(bodyParser.json())
app.use("/uploads", express.static("uploads"))


const port = process.env.PORT || 5000

// mongodb connection
conn.connection.on('connected', (err)=>{

    if(err){

        console.log(err)

    }else{

        console.log("connected to mongodb")

    }
})







//................................................................Routes..................................................

app.use('/users', userRouter) // users

app.use('admin/contest', contestRouter) // admin routes

app.use('/bannerupload', bannerRouter) // banner routes


// AMOL
app.use("/createbasket", require("./routes/CreateBasket"));


// join Contest
app.use("/joincontest", require("./routes/joinContest"));



//........................................................................................................................

app.get('/', (req, res)=>{

    res.send({status : "ok"})

})

app.use('*', (req, res) => {

    res.status(404).send(`<h1 style="color : red ; text-align: center; magin; margin-top: 20%"> Page Not Found </h1>`)

})

app.post('/upload', (req, res)=>{

    console.log(req.files)
    res.send('file upload success')

})

app.listen(port, ()=>{

    console.log(`server is runnig at http://localhost:${port}`)
    
})

