# Liga Salvavida Volleyviana

## En que consiste

Este pretende ser un ejercicio rápido en clase como repaso del manejo de backend con Node js y Express js. Se irá desarrollando de a poco a medida que se avance con la asignación.

## Requisitos
* Node js instalado (versión 20 o superior)
* Cualquier editor de código o IDE
* Algun gestor de paquetes de node como **npm**, **pnpm**.

## Como ejecutar el backend
``` Bash
cd backend
npm install      # Instalar express.js y depedencias definidas en el package.json
npm run dev      # Hot reload
npm run start    # Estático
```

## Como probar las rutas

### Entidad: **Equipos**

- **Ruta Base:** `http://localhost:3050/v1/equipo`

#### 1. Obtener todos los equipos
- **Método:** `GET`
- **Endpoint:** `/v1/equipo`
```bash
curl -X GET http://localhost:3050/v1/equipo

```

#### 2. Obtener un equipo por ID

* **Método:** `GET`
* **Endpoint:** `/v1/equipo/:id`

```bash
curl -X GET http://localhost:3050/v1/equipo/1

```

#### 3. Crear un nuevo equipo

* **Método:** `POST`
* **Endpoint:** `/v1/equipo`

```bash
curl -X POST http://localhost:3050/v1/equipo \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Los Rayos",
    "numeroIntegrantes": 10,
    "lema": "Siempre hacia adelante"
  }'

```

#### 4. Actualizar un equipo por ID

* **Método:** `PUT`
* **Endpoint:** `/v1/equipo/:id`

```bash
curl -X PUT http://localhost:3050/v1/equipo/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Rayos F.C.",
    "numeroIntegrantes": 12,
    "lema": "Unidos por Victoria FC"
  }'

```

#### 5. Eliminar un equipo por ID

* **Método:** `DELETE`
* **Endpoint:** `/v1/equipo/:id`

```bash
curl -X DELETE http://localhost:3050/v1/equipo/1

```

---

### Entidad: **Jugadores**

* **Ruta Base:** `http://localhost:3050/v1/jugador`

#### 1. Obtener todos los jugadores

* **Método:** `GET`
* **Endpoint:** `/v1/jugador`

```bash
curl -X GET http://localhost:3050/v1/jugador

```

#### 2. Obtener un jugador por ID

* **Método:** `GET`
* **Endpoint:** `/v1/jugador/:id`

```bash
curl -X GET http://localhost:3050/v1/jugador/1

```

#### 3. Crear un nuevo jugador

* **Método:** `POST`
* **Endpoint:** `/v1/jugador`

```bash
curl -X POST http://localhost:3050/v1/jugador \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Carlos Pérez",
    "edad": 24,
    "sexo": "M",
    "posición": "Colocador"
  }'

```

#### 4. Actualizar un jugador por ID

* **Método:** `PUT`
* **Endpoint:** `/v1/jugador/:id`

```bash
curl -X PUT http://localhost:3050/v1/jugador/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Carlos Pérez",
    "edad": 25,
    "sexo": "M",
    "posición": "Libero"
  }'

```

#### 5. Eliminar un jugador por ID

* **Método:** `DELETE`
* **Endpoint:** `/v1/jugador/:id`

```bash
curl -X DELETE http://localhost:3050/v1/jugador/1

```

---

### Entidad: **Torneos**

* **Ruta Base:** `http://localhost:3050/v1/torneo`

#### 1. Obtener todos los torneos

* **Método:** `GET`
* **Endpoint:** `/v1/torneo`

```bash
curl -X GET http://localhost:3050/v1/torneo

```

#### 2. Obtener un torneo por ID

* **Método:** `GET`
* **Endpoint:** `/v1/torneo/:id`

```bash
curl -X GET http://localhost:3050/v1/torneo/1

```

#### 3. Crear un nuevo torneo

* **Método:** `POST`
* **Endpoint:** `/v1/torneo`

```bash
curl -X POST http://localhost:3050/v1/torneo \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Copa Verano 2026",
    "duracion": "2 meses",
    "cantMaxEquipos": 16,
    "fechaInicio": "2026-09-01",
    "fechaFin": "2026-11-01"
  }'

```

#### 4. Actualizar un torneo por ID

* **Método:** `PUT`
* **Endpoint:** `/v1/torneo/:id`

```bash
curl -X PUT http://localhost:3050/v1/torneo/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Copa Verano 2026 Edición Caguawama",
    "duracion": "3 meses",
    "cantMaxEquipos": 20,
    "fechaInicio": "2026-09-01",
    "fechaFin": "2026-12-01"
  }'

```

#### 5. Eliminar un torneo por ID

* **Método:** `DELETE`
* **Endpoint:** `/v1/torneo/:id`

```bash
curl -X DELETE http://localhost:3050/v1/torneo/1

```

### Entidad: Árbitros

- **Ruta Base:** `http://localhost:3000/api/v1/arbitro`

#### 1. Obtener todos los árbitros
- **Método:** `GET`
- **Endpoint:** `/api/v1/arbitro`
```bash
curl -X GET http://localhost:3000/api/v1/arbitro

```

#### 2. Obtener un árbitro por ID

* **Método:** `GET`
* **Endpoint:** `/api/v1/arbitro/:id`

```bash
curl -X GET http://localhost:3000/api/v1/arbitro/1

```

#### 3. Crear un nuevo árbitro

* **Método:** `POST`
* **Endpoint:** `/api/v1/arbitro`

```bash
curl -X POST http://localhost:3000/api/v1/arbitro \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Roberto Rosetti",
    "edad": 42,
    "salario": 2500,
    "rol_preferido": "Principal"
  }'

```

#### 4. Actualizar un árbitro por ID

* **Método:** `PUT`
* **Endpoint:** `/api/v1/arbitro/:id`

```bash
curl -X PUT http://localhost:3000/api/v1/arbitro/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Roberto Rosetti",
    "edad": 43,
    "salario": 2800,
    "rol_preferido": "VAR"
  }'

```

#### 5. Eliminar un árbitro por ID

* **Método:** `DELETE`
* **Endpoint:** `/api/v1/arbitro/:id`

```bash
curl -X DELETE http://localhost:3000/api/v1/arbitro/1

```

### Entidad: Partidos

* **Ruta Base:** `http://localhost:3000/api/v1/partido`

#### 1. Obtener todos los partidos

* **Método:** `GET`
* **Endpoint:** `/api/v1/partido`

```bash
curl -X GET http://localhost:3000/api/v1/partido

```

#### 2. Obtener un partido por ID

* **Método:** `GET`
* **Endpoint:** `/api/v1/partido/:id`

```bash
curl -X GET http://localhost:3000/api/v1/partido/1

```

#### 3. Crear un nuevo partido

* **Método:** `POST`
* **Endpoint:** `/api/v1/partido`

```bash
curl -X POST http://localhost:3000/api/v1/partido \
  -H "Content-Type: application/json" \
  -d '{
    "ciudad": "Madrid",
    "estadio": "Santiago Bernabéu",
    "arbitroId": 1,
    "puntos_local": 2,
    "puntos_visita": 1,
    "fecha": "2026-10-15"
  }'

```

#### 4. Actualizar un partido por ID

* **Método:** `PUT`
* **Endpoint:** `/api/v1/partido/:id`

```bash
curl -X PUT http://localhost:3000/api/v1/partido/1 \
  -H "Content-Type: application/json" \
  -d '{
    "puntos_local": 3,
    "puntos_visita": 1
  }'

```

#### 5. Eliminar un partido por ID

* **Método:** `DELETE`
* **Endpoint:** `/api/v1/partido/:id`

```bash
curl -X DELETE http://localhost:3000/api/v1/partido/1

```
