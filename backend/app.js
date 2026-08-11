const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3050;
app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log(`[OK] Servidor corriendo en el puerto ${port}`)
})
