const express = require('express');
const app = express();
const path = require('path');
const routes=require('./routes/servicioRoutes');

const databaseConnection = require('../config/database');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

databaseConnection.connect();

app.use("/", routes);

app.listen(3000,()=>{
    console.log("Server corriendo en el puerto 3000");
});