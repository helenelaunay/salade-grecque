require("dotenv").config();
var cors = require("cors");
var bodyParser = require("body-parser");
const express = require("express");
const multer = require("multer");
const upload = multer();

const app = express();
const port = process.env.PORT || 3232;

// Middleware pour parser le JSON
app.use(express.json());
app.use(upload.any());
// Middleware pour les requet cros origin 
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Connexion à MongoDB
require('./dataBase/connect')

// Route de base
app.use("/api/auth",require('./routes/authRoute'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});