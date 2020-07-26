const express = require('express');
const {dbConnection} = require('./database/config')
const cors = require('cors')
require('dotenv').config(); 


//crear el servidor de express

const app = express(); 

app.use(cors());
//database
dbConnection();
console.log(process.env); 
app.get('/', (req, res) => {
    res.status(400).json({
        "ok":true,
        "msj": "estado correcto"
    })
});

app.listen(process.env.PORT, () => console.log("corriendo en el puerto: ", process.env.PORT)); 