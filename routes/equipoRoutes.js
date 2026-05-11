const express = require('express');
const router = express.Router();

// Controladores para manejar las rutas de equipo
const { getEquipo, getPerfil } = require('../controllers/equipoController');

// Ruta para obtener informacion/miembros del equipo
router.get('/', getEquipo)

// Ruta para obtener el perfil de un miembro del equipo
router.get('/:id', getPerfil)

module.exports = router;