const { Router } = require('express')
const rutas = Router();

const { crearReserva } = require('../controllers/controlador.js')
const { buscarReserva } = require('../controllers/controlador.js')
const { buscarReservas } = require('../controllers/controlador.js')
const { editarReserva } = require('../controllers/controlador.js')
const { eliminarReserva } = require('../controllers/controlador.js')



rutas.get('/avanzada/v1/jugadores', buscarReservas)
rutas.get('/avanzada/v1/jugadores/:id', buscarReserva)
rutas.post('/avanzada/v1/jugadores', crearReserva)
rutas.put('/avanzada/v1/jugadores/:id', editarReserva)
rutas.delete('/avanzada/v1/jugadores/:id', eliminarReserva)

module.exports = rutas