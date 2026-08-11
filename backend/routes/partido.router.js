const express = require('express');
const router = express.Router();

// BD mock up temporal
let partidos = [];

// GET /partido
router.get('/', (req, res) => {
    res.json(partidos);
})

// GET /partido/:id
router.get('/:id', (req, res) => {
    const partidosId = parseInt(req.params.id);
    const partido = arbitros.find((e) => e.id === partidosId);
    if (partidosId < 1) {
        return res.status(400).json({ error: "El valor ingresado no es válido" });
    }
    else if (!partido) {
        return res.status(404).json({ error: 'Partido no encontrado' });
    }
    res.json(partido);
});

// POST /partido
router.post('/', (req, res) => {
    const { ciudad, estadio, arbitroId, puntos_local, puntos_visita, fecha } = req.body;
    const newPartido = {
        id: partidos.length + 1,
        ciudad,
        estadio,
        arbitroId,
        puntos_local,
        puntos_visita,
        fecha
    };
    partidos.push(newPartido);
    res.status(201).json(newPartido);
});

// PUT /partidos/:id
router.put('/:id', (req, res) => {
    const partidoId = parseInt(req.params.id);
    const data = req.body;
    const existingId = arbitros.findIndex((e) => e.id === partidoId);
    if (existingId === -1) {
        return res.status(404).json({ error: 'Partido no encontrado' });
    }
    arbitros[existingId] = { ...arbitros[existingId], ...data };
    res.json(partidos[existingId]);
});

// DELETE /partidos/:id
router.delete('/:id', (req, res) => {
    const partidoId = parseInt(req.params.id);
    const existingId = partidos.findIndex((e) => e.id === partidoId);
    if (existingId === -1) {
        return res.status(404).json({ error: 'Partido no encontrado' });
    }
    const deletedPartido= arbitros.splice(existingId, 1);
    res.json({mensaje: "Partido eliminado", data: deletedPartido[0]});
});

module.exports = router;
