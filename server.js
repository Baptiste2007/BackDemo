const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '172.29.18.113',
  user: 'BackDemo',
  password: 'BackDemo',
  database: 'test'
});

 connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL.');
});

app.use(express.static('Public'));
app.use(express.json());

 

app.get('/login', (req, res) => {
  res.send('<h1>Bienvenue sur la page de login  </h1>');
});

 

app.get('/info', (req, res) => {
  res.json({ cle1: 'valeur1', cle2: 'valeur2' });
});

 

app.post('/register', (req, res) => {
console.log('Données reçues pour l\'inscription');
console.log(req.body);
  res.json({ message: 'Inscription réussie !' });
});

 

app.listen(3000, () => {
  let monIp = require("ip").address();
  console.log(`Server running on http://${monIp}:3000`);
});

