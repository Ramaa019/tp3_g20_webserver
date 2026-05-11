const express = require('express');
const router = express.Router();

// Controladores para manejar las rutas de servicios
const { getServicios, getServiciosById } = require('../controllers/serviciosController');

// Ruta para obtener todos los servicios
router.get('/', getServicios)

// Ruta para obtener un servicio por ID
router.get('/:id', getServiciosById)

module.exports = router;