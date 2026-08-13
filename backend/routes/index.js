const express = require('express');
const equiposRouter = require('./equipo.router');
const jugadoresRouter = require('./jugador.router');
const torneoRouter = require('./torneo.router');
const partidoRouter = require('./partido.router');
const arbitroRouter = require('./arbitro.router');
const anidbRouter = require('./AniDB.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/v1', router);

  router.use('/equipo', equiposRouter);
  router.use('/jugador', jugadoresRouter);
  router.use('/torneo', torneoRouter);
  router.use('/partido', partidoRouter);
  router.use('/arbitro', arbitroRouter);
  router.use('/anime', anidbRouter);
}

module.exports = routerApi;
