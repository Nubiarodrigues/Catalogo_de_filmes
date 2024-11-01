import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Buscar.css';

function Buscar() {
  const [termoBusca, setTermoBusca] = useState(''); 
  const[filmes, setFilmes] = useState([]);
  const [error, setError] = useState('');

// função para buscar o filme da API
const buscarFilmes = async () => {
  if (!termoBusca.trim()) {
    // Se o campo de busca estiver vazio, reseta a lista de filmes
    setFilmes([]);
    setError("Por favor, digite um termo de busca.");
    return;
  }

  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/filmes?search=${termoBusca}`);
    
    if (response.data && response.data.length > 0) {
      setFilmes(response.data);
      setError('');
    } else {
      setFilmes([]);
      setError("Filme não encontrado!");
    }
  } catch (err) {
    console.error("Erro detalhado: ", err);
    setError("Erro ao carregar o filme.");
    setFilmes([]);
  }
};


return (
  <div >
    <h1 style={{ fontSize: '1.5em' }}>Catálogo de Filmes</h1>
    <div className='input-container'>
      <input 
        type="text"
        placeholder="Digite o nome do filme"
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      <button onClick={buscarFilmes}>Buscar</button>
    </div>
    
    {error && <p style={{ color: 'red' }}>{error}</p>}
    
    {filmes.length > 0 && (
      <div className='container' >
        {filmes.map((filme) => (
          <div 
            key={filme.titulo} 
            style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '80%', maxWidth: '300px', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '1.2em' }}>{filme.titulo}</h2>
            <img 
              src={filme.imagem} 
              alt={filme.titulo} 
              style={{ width: '80%', height: 'auto' }} 
            />
            <p>Ano de lançamento: {filme.ano_lancamento}</p>
          </div>
        ))}
      </div>
    )}
  </div>

  );
}
export default Buscar;
