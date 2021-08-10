const express = require('express');

const app = express();

let users = require('./userlist.json');


app.use(express.json());

app.get('/', function (req, res) {
    res.send('Welcome to Home page')
})

app.get('/users', function (req, res) {
    return res.send(users);
})

app.post('/users', function (req, res) {
    let x = req.body;
    // let details = [...users, x];
    users.push(x);
    res.send(users);
})

app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let newusers = users.map((el) => {
        if (el.id == id) {
            el.first_name='shruthi'
        }
        return el;
    })
    res.send(newusers);
})

app.delete('/user/:id', function (req, res) {
    let id = req.params.id;
    let newusers = users.filter(function (el) {
        if (el.id != id) {
            return el;
        }
    })
    res.send(newusers);
})


app.listen(3000, function () {
    console.log("listening on port 3000")
})