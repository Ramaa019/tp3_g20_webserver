const express = require('express')
const router = express.Router()

// Importamos el controlador asíncrono del perfil
const { getPerfilById } = require('../controllers/perfilController')

// Definimos el endpoint dinámico para buscar por ID
router.get('/:id', getPerfilById)

module.exports = router
