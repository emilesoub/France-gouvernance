// server/index.js
const express = require('express');
const app = express();
const port = 5000;

// This line allows the server to read JSON from requests
app.use(express.json());

const testProposals = [
  { id: 1, title: 'Proposition Stratégique : Améliorer la communication interne', description: 'Mettre en place des outils et des rituels pour fluidifier l\'information.' },
  { id: 2, title: 'Proposition Tactique : Créer un Discord pour les nouveaux arrivants', description: 'Un espace dédié pour accueillir et guider les nouvelles abeilles.' }
];

// The route to get the list of proposals
app.get('/api/proposals', (req, res) => {
  console.log('API GET /api/proposals called');
  res.json(testProposals);
});

// The route to receive a new proposal from the form
app.post('/api/proposals', (req, res) => {
  const newProposal = req.body;
  console.log('Proposition reçue sur le backend :', newProposal);

  // Confirm to the frontend that everything went well
  res.status(201).json({ message: 'Proposition créée avec succès', proposal: newProposal });
});

// Start the server
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
