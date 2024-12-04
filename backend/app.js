const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta principal que devuelve el archivo index.html
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Inicia el servidor
app.listen(port, () => {
   console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
