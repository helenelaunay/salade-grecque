const mongoose = require('mongoose');

const db = mongoose.createConnection(process.env.MONGO_URL);

// Lors d'une erreur lié à mongo
db.on('error', (error) => {
  console.log(`Connexion impossible à  : ${error.message}`);
  db.close();
});

// Lors d'une connexion
db.on('connected', () => {
  console.log(`La connexion a réussie`);
});

// Lors d'une déconnexion
db.on('disconnected', () => {
  console.log(`La connexion est fermée`);
});
 
// Lors d'une reconnexion
db.on('reconnected', () => {
  console.log(`La reconnexion a réussie`);
});

module.exports = db