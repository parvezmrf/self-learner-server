const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const courseCollection = require('./data/data.json')

app.get('/courses', (req, res) => {

    res.send(courseCollection)
})


app.listen(port, () => {
    console.log('running', port)
})