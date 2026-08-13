const express = require('express');
const router = express();

// GET datos de un pokemon
router.get('/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

        if (!response.ok) {
            return res.status(404).json({ error: 'Pokémon no encontrado' });
        }

        const data = await response.json();

        const pokemon = {
            id: data.id,
            name: data.name,
            stats: data.stats,
            abilities: data.abilities,
            types: data.types.map(t => t.type.name),
            height: data.height,
            weight: data.weight
        };

        res.json(pokemon);
    } catch (error){
        res.status(500).json({ error: 'Error al consultar la PokeAPI' });
    }
});

// GET pokemons por color
router.get('/:color', async (req, res) => {
    const color = req.params.color;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${color.toLowerCase()}`);

        if (!response.ok) {
            return res.status(404).json({ error: 'Pokemon con ese color no existe' });
        }

        const data = await response.json();

        const pokemon = {
            id: data.id,
            name: data.name,
            names: data.names.map(t => t.names.name),
            pokemon: data.pokemon_species.map(t => t.pokemon_species.name)
        };

        res.json(pokemon);
    } catch (error){
        res.status(500).json({ error: 'Error al consultar la PokeAPI' });
    }
});
