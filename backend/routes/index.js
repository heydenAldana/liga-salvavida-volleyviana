const express = require('express');
const equiposRouter = require('./equipo.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/equipo', equiposRouter);
}

module.exports = routerApi;
