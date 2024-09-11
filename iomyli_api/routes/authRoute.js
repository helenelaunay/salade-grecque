const app = require('express').Router();

app.post("/register" ,require('../controllers/auth/register'))
app.post("/login" ,require('../controllers/auth/login'))

module.exports = app; 