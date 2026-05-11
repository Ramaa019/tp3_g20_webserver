const express = require('express')
const router = express.Router()

// Controladores para manejar las rutas de equipo
const { getEquipo } = require('../controllers/equipoController')

// Ruta para obtener los miembros del equipo
router.get('/', getEquipo)

module.exports = router
