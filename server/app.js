if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

// console.log(process.env.TMDB_API_KEY)

const express = require('express');
const app = express();
const port = 3000;
const {
    errorHandler
} = require('./middlewares/errorHandler')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/group_project_glory', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Success connected to mongodb')
    });

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

const routes = require('./routes/index')

app.use('/', routes)

app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}`))