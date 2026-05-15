const express = require('express')
const cors = require('cors')
const path = require('path')

// Cargar variables de entorno desde el archivo .env
require('dotenv').config()

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(cors())
    // Mapeo de la carpeta pública con el alias /static
    this.app.use('/static', express.static(path.join(__dirname, '../public')))
  }

  rutas () {
    // Rutas
    this.app.use('/servicios', require('../routes/serviciosRoutes'))
    this.app.use('/equipo', require('../routes/equipoRoutes'))

    // manejo de errores
    this.app.use((req, res, next) => {
      return res.status(400).json({ msg: 'Error.' })
    })
    this.app.use((err, req, res, next) => {
      console.error(err.stack)
      return res.status(404).json({ msg: 'Error. Pagina no encontrada' })
    })
    this.app.use((err, req, res, next) => {
      console.error(err.stack)
      return res.status(500).json({ msg: 'Internal Server Error' })
    })
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando el el puerto: ${this.port}`)
    })
  }
}

module.exports = Server
