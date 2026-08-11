const express = require('express');
const router = express.Router();

// BD mock up temporal
let equipos = [];

// GET /equipo
router.get('/', (req, res) => {
  res.json(equipos);
})

// GET /equipo/:id
router.get('/:id', (req, res) => {
  const equipoId = parseInt(req.params.id);
  const equipo = equipos.find((e) => e.id === equipoId);
  if (equipoId < 1) {
    return res.status(400).json({ error: "El valor ingresado no es válido" });
  }
  else if (!equipo) {
    return res.status(404).json({ error: 'Equipo no encontrada' });
  }
  res.json(equipo);
});

// POST /equipo
router.post('/', (req, res) => {
  const { nombre, numeroIntegrantes, lema } = req.body;
  const newEquipo = {
    id: equipos.length + 1,
    nombre,
    numeroIntegrantes,
    lema
  };
  equipos.push(newEquipo);
  res.status(201).json(newEquipo);
});

// PUT /equipos/:id
router.put('/:id', (req, res) => {
  const equipoId = parseInt(req.params.id);
  const updatedEquipo = req.body;
  const existingEquipoIndex = equipos.findIndex((e) => e.id === equipoId);
  if (existingEquipoIndex === -1) {
    return res.status(404).json({ error: 'Equipo no encontrada' });
  }
  equipos[existingEquipoIndex] = { ...equipos[existingEquipoIndex], ...updatedEquipo };
  res.json(equipos[existingEquipoIndex]);
});

// DELETE /equipo/:id
router.delete('/:id', (req, res) => {
  const equipoId = parseInt(req.params.id);
  const existingEquipoIndex = equipos.findIndex((e) => e.id === equipoId);
  if (existingEquipoIndex === -1) {
    return res.status(404).json({ error: 'Equipo no encontrada' });
  }
  const deletedEquipo = equipos.splice(existingEquipoIndex, 1);
  res.json(deletedEquipo[0]);
});

module.exports = router;
