const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.render("main.jsx")
})

app.get('/login', (req, res) => {
    res.render("Login.jsx")
})

app.get('/register', (req, res) => {
    res.render("Register.jsx")
})

app.listen(5137)