const express = require('express');
const connection = require('./db');
const app = express();

app.use(express.json());

app.get('/productos_de_limpieza', (req, res) => {
    connection.query('SELECT * FROM productos_de_limpieza', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al consultar los productos' });
        }
        res.json(results);
    });
});

app.post('/productos_de_limpieza', (req, res) => {
    const { nombre, descripcion, cantidad, precio } = req.body;

    if (!nombre || !descripcion || !cantidad || !precio) {
        return res.status(400).json({ error: 'faltan datos para agregar el producto' });
    }

    const query = 'INSERT INTO productos_de_limpieza (nombre, descripcion, cantidad, precio) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre, descripcion, cantidad, precio], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'error al insertar el producto' });
        }
        res.status(201).json({ id: result.insertId, nombre, descripcion, cantidad, precio });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
