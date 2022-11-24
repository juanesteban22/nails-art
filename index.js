/*const express = require('express');
const app = express();
const port = 10101;
app.get('/', (req, res) => {
res.send('Esta es mi primera app de express')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})*/
const express = require('express');
let mysql = require('mysql');
const app = express();
const port = 10101;
const pool = mysql.createPool({
connectionLimit : 100,
host     : 'localhost',
user     : 'nombres',
password : '',
database : 'usuario',
debug    : false
});
app.get('/', (req, res) => {
res.send('Esta es mi primera app de express')
})
app.get('/testdb', (req, res) => {
pool.query('SELECT * FROM datos', function (error, results, fields) {
if (error) throw error;
let edad = results[0].edad;
let peso = results[0].peso;
let correo = results[0].correo;
let nombres = results[0].nombres;
res.send(`Edad: ${edad}, Peso: ${peso}, Correo: ${correo}, Nombres: ${nombres} `)
});
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
