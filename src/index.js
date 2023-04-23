const express = require("express");
const mongose = require("mongoose");


const app = express();
const port = 9000;

//rutas

app.get("/", (req, res) =>{
    res.send("Bienvenido a la API");
})

// Coneccion a mongoDB Atlas

mongose.connect()


app.listen(port, ()=> console.log('server listo en el puerto', port));