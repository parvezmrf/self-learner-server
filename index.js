const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const courseCollection = require('./data/data.json')

app.get('/courses', (req, res) => {

    res.send(courseCollection)
})

app.get('/course/:id', (req, res) => {
    const ids = req.params.id;
    const signleCourse = courseCollection?.find((p) => p.id == ids);
    res.send(signleCourse)
})

app.get('/buy/:id', (req, res) => {
    const ids = req.params.id;
    const buyCourse = courseCollection?.find((p) => p.id == ids);
    res.send(buyCourse)
})

app.listen(port, () => {
    console.log('running', port)
})

module.exports = app