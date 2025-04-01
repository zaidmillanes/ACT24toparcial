const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hehe',
    password: '', // Aseg�rate de usar la contrase�a correcta si la tienes
    database: 'inventarios'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        return;
    }
    console.log('Conexi�n exitosa a la base de datos.');
});

module.exports = connection;