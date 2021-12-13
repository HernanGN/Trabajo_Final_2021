const express= require('express');

const routes=express.Router();

const servicioControllers = require('../controllers/servicioControllers');

routes.get("/", servicioControllers.renderIndex);

routes.get("/programas", servicioControllers.renderProgramas);

routes.get("/preguntas", servicioControllers.renderPreguntas);

routes.get("/prestadores", servicioControllers.renderPrestadores);

module.exports = routes;