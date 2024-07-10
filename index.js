const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const app = express();
const cors= require('cors')
const Port = 4000
const userRoute = require('./routes/userRoute')
const billRoute = require('./routes/billRoute')
const itemsRoute = require('./routes/itemsRoute')
app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
    res.send('Welcome to Store Management')
})

app.use('/user',userRoute)
app.use('/items',itemsRoute)
app.use('/bill',billRoute)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('mongoose is connected')
        app.listen(Port, () => console.log(`server started on the port ${Port}`))
    }).catch((error) => {
        console.log("Error", error)
    })
