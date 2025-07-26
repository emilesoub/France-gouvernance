// client/src/App.js (version modifiée)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProposalsListPage from './pages/ProposalsListPage';
import CreateProposalPage from './pages/CreateProposalPage'; // Importez la nouvelle page

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Route pour la liste des propositions */}
          <Route path="/" element={<ProposalsListPage />} />

          {/* NOUVELLE ROUTE pour la page de création */}
          <Route path="/create" element={<CreateProposalPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;