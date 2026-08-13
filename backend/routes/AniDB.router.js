const express = require('express');
const router = express.Router();

let animes = [];

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime');
    if (!response.ok)
      throw new Error(`[Error] Error HTTP. Status: ${response.data}`);
    const data = await response.json();
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al conectar con AniDB :(' });
  }
});

module.exports = router;
