const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(3000, '0.0.0.0', () => {
  console.log('✅ Serveur accessible sur http://localhost:3000');
});
