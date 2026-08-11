const express = require('express');
const router = express.Router();

// BD mock up temporal
let torneos = [];

router.get('/', (req, res) => {
  res.json(torneos);
})

router.get('/:id', (req, res) => {
  const torneoId = parseInt(req.params.id);
  const torneo = torneos.find((e) => e.id === torneoId);
  if (torneoId < 1) {
    return res.status(400).json({ error: "El valor ingresado no es válido" });
  }
  else if (!torneo) {
    return res.status(404).json({ error: 'Torneo no encontrado' });
  }
  res.json(torneo);
});

router.post('/', (req, res) => {
  const { nombre, duracion, cantMaxEquipos, fechaInicio, fechaFin } = req.body;
  const newtorneo = {
    id: torneos.length + 1,
    nombre,
    duracion,
    cantMaxEquipos,
    fechaInicio,
    fechaFin
  };
  torneos.push(newtorneo);
  res.status(201).json(newtorneo);
});

router.put('/:id', (req, res) => {
  const torneoId = parseInt(req.params.id);
  const updatedTorneo = req.body;
  const existingTorneoIndex = torneos.findIndex((e) => e.id === torneoId);
  if (existingTorneoIndex === -1) {
    return res.status(404).json({ error: 'Torneo no encontrado' });
  }
  torneos[existingTorneoIndex] = { ...torneos[existingTorneoIndex], ...updatedTorneo };
  res.json(torneos[existingTorneoIndex]);
});

router.delete('/:id', (req, res) => {
  const torneoId = parseInt(req.params.id);
  const existingTorneoIndex = tasks.findIndex((e) => e.id === torneoId);
  if (existingTorneoIndex === -1) {
    return res.status(404).json({ error: 'Torneo no encontrado' });
  }
  const deletedTorneo = torneos.splice(existingTorneoIndex, 1);
  res.json(deletedTorneo[0]);
});

module.exports = router;
