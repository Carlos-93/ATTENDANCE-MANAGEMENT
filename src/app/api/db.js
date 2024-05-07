
// server.js
const cors = require('cors');

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001; // Puedes cambiar el puerto según tus necesidades

// Configura los encabezados HTTP para permitir CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'moodle_dev'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión establecida con la base de datos MySQL');
});



// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());

// Get para mostrar todos los usuarios
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM mdl_user';
  connection.query
  (query, (error, results, fields) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).json({ error: 'Error al realizar la consulta' });
      return;
    }
    res.json(results);
  });
});
// Ruta para manejar la solicitud de inicio de sesión
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Realizar la consulta a la base de datos para verificar las credenciales
  const query = `SELECT * FROM mdl_user WHERE email = ? AND password = ?`;
  connection.query(query, [email, password], (error, results, fields) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).json({ error: 'Error al realizar la consulta' });
      return;
    }
    if (results.length > 0) {
      // Credenciales válidas
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      // Credenciales inválidas
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Express.js en ejecución en http://localhost:${port}`);
});
