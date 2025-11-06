const express = require('express');
const app = express();

// Sert ton site (tes fichiers index.html, JS, CSS, etc.)
app.use(express.static(__dirname));

app.listen(3000, '0.0.0.0', () => {
  console.log('✅ Serveur accessible sur http://localhost:3000');
});
