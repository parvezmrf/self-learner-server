const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const courseCollection = require('./data/data.json')

app.get('/courses', (req, res) => {

    res.send(courseCollection)
})

app.get('/course/:id', (req, res) => {

    const ids = req.params.id;
    const signleCourse = courseCollection?.find((p) => p.id == ids);
    if (!signleCourse) {
        res.send('No data found')
    }
    res.send(signleCourse)
})

app.listen(port, () => {
    console.log('running', port)
})