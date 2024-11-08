const express = require('express');
const cors = require('cors');  
const mysql = require('mysql2');
const app = express();
const port = 3000;


const dotenv = require("dotenv");

dotenv.config();
app.use(cors());  


app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DHOST,
  user: process.env.DUSER,
  password: process.env.PASSWORD, 
  database: process.env.NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'INSERT INTO logins (usuario, contraseña, ingreso) VALUES (?, ?, NOW())';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error al registrar el login:', err);
      res.status(500).json({ message: 'Error al registrar el login' });
    } else {
      res.status(200).json({ message: 'Inicio de sesión registrado con éxito' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
