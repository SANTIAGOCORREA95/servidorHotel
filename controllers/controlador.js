const { request, response } = require('express')

function crearReserva(peticion = request, respuesta = response) {

    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy creando una reserva",
        datos:datosPeticion
    })

}

function buscarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy buscando un jugador " + id
    })

}

function buscarReservas(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "estoy buscando todos los jugadores"
    })

}

function editarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    let datosPeticion = peticion.body


    respuesta.json({
        mensaje: "estoy editando un jugador",
        datos:datosPeticion
    })

}

function eliminarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy eliminando un jugador"
    })

}

module.exports = {

    crearReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva,

}
