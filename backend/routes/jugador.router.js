const express = require('express');
const router = express.Router();

// BD mock up temporal
let jugadores = [];

router.get('/', (req, res) => {
  res.json(jugadores);
})

router.get('/:id', (req, res) => {
  const jugadoresId = parseInt(req.params.id);
  const jugador = jugadores.find((e) => e.id === jugadoresId);
  if (jugadorId < 1) {
    return res.status(400).json({ error: "El valor ingresado no es válido" });
  }
  else if (!jugador) {
    return res.status(404).json({ error: 'Jugador no encontrada' });
  }
  res.json(jugador);
});

router.post('/', (req, res) => {
  const { nombre, edad, sexo, posición } = req.body;
  const newJugador = {
    id: jugadores.length + 1,
    nombre,
    edad,
    sexo,
    posición
  };
  jugadores.push(newJugador);
  res.status(201).json(newJugador);
});

router.put('/:id', (req, res) => {
  const jugadorId = parseInt(req.params.id);
  const updatedJugador = req.body;
  const existingJugadorIndex = jugadores.findIndex((e) => e.id === jugadorId);
  if (existingJugadorIndex === -1) {
    return res.status(404).json({ error: 'Jugador no encontrada' });
  }
  jugadores[existingJugadorIndex] = { ...jugadores[existingJugadorIndex], ...updatedJugador };
  res.json(jugadores[existingJugadorIndex]);
});

router.delete('/:id', (req, res) => {
  const jugadorId = parseInt(req.params.id);
  const existingJugadorIndex = tasks.findIndex((e) => e.id === jugadorId);
  if (existingJugadorIndex === -1) {
    return res.status(404).json({ error: 'Jugador no encontrada' });
  }
  const deletedJugador = jugadores.splice(existingJugadorIndex, 1);
  res.json(deletedJugador[0]);
});

module.exports = router;
