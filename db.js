const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hehe', L
    password: 'uanshu@123', 
    database: 'inventarios'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');
});

module.exports = connection;
