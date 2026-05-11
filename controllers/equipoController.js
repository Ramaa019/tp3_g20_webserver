const fs = require('fs').promises

const getEquipo = async (req, res) => {
  try {
    const data = await fs.readFile('./data/equipo.json', 'utf8')
    const equipo = JSON.parse(data)

    return res.status(200).json(equipo)
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: 'No se puedieron obtener los miembros del equipo' })
  }
}

const getPerfil = async (req, res) => {
  try {
    const data = await fs.readFile('./data/equipo.json', 'utf8')
    const equipo = JSON.parse(data)

    const { id } = req.params

    const miembro = equipo.find((m) => m.id === parseInt(id))

    if (!miembro) {
      return res.status(404).json({ msg: `No existe el miembro con id ${id}` })
    }

    return res.status(200).json(miembro)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: `No se pudo obtener el detalle del miembro con id n° ${id}`
    })
  }
}

module.exports = { getEquipo, getPerfil }
