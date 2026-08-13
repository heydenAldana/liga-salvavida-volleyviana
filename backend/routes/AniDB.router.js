const express = require('express');
const router = express.Router();

let animes = [];

router.get('/animes', async (req, res) => {
  try {
    const response = await fetch('http://api.anidb.net:9001/httpapi?request=anime');
    const data = await response.json();
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al conectar con AniDB :(' });
  }
});

module.exports = router;
