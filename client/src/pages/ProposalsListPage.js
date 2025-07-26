// client/src/pages/ProposalsListPage.js (version modifiée)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importez le composant Link

function ProposalsListPage() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch('/api/proposals')
      .then(res => res.json())
      .then(data => setProposals(data));
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Liste des Propositions</h1>
        {/* Ajoutez le lien ici */}
        <Link to="/create" style={{ padding: '10px 15px', backgroundColor: 'blue', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          + Créer une proposition
        </Link>
      </div>

      {proposals.map(proposal => (
        <div key={proposal.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
          <h3>{proposal.title}</h3>
          <p>{proposal.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProposalsListPage;