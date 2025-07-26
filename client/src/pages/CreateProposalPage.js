// client/src/pages/CreateProposalPage.js (Version complète et corrigée)
import React, { useState } from 'react';

function CreateProposalPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/proposals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Réponse du serveur :', data);
      alert('Proposition soumise avec succès !');
    })
    .catch((error) => {
      console.error('Erreur lors de la soumission:', error);
      alert('Une erreur est survenue.');
    });
  };

  return (
    <div>
      <h2>Créer une nouvelle proposition</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title">Titre de la proposition</label><br />
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description">Description détaillée</label><br />
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 15px' }}>Soumettre la proposition</button>
      </form>
    </div>
  );
}

export default CreateProposalPage;
