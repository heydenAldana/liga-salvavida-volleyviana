const express = require('express');
const router = express.Router();

// BD mock up temporal
let arbitros = [];

// GET /arbitro
router.get('/', (req, res) => {
    res.json(arbitros);
})

// GET /arbitro/:id
router.get('/:id', (req, res) => {
    const arbitroId = parseInt(req.params.id);
    const arbitro = arbitros.find((e) => e.id === arbitroId);
    if (arbitroId < 1) {
        return res.status(400).json({ error: "El valor ingresado no es válido" });
    }
    else if (!arbitro) {
        return res.status(404).json({ error: 'Arbitro no encontrada' });
    }
    res.json(arbitro);
});

// POST /arbitro
router.post('/', (req, res) => {
    const { nombre, salario, edad, rol_preferido} = req.body;
    const newArbitro = {
        id: arbitros.length + 1,
        nombre,
        edad,
        salario,
        rol_preferido
    };
    arbitros.push(newArbitro);
    res.status(201).json(newArbitro);
});

// PUT /arbitros/:id
router.put('/:id', (req, res) => {
    const arbitroId = parseInt(req.params.id);
    const data = req.body;
    const existingId = arbitros.findIndex((e) => e.id === arbitroId);
    if (existingId === -1) {
        return res.status(404).json({ error: 'Arbitro no encontrado' });
    }
    arbitros[existingId] = { ...arbitros[existingId], ...data};
    res.json(arbitros[existingId]);
});

// DELETE /arbitros/:id
router.delete('/:id', (req, res) => {
    const arbitroId = parseInt(req.params.id);
    const existingId = arbitros.findIndex((e) => e.id === arbitroId);
    if (existingId === -1) {
        return res.status(404).json({ error: 'Arbitro no encontrado' });
    }
    const deletedArbitro = arbitros.splice(existingId, 1);
    res.json(deletedArbitro[0]);
});

module.exports = router;
