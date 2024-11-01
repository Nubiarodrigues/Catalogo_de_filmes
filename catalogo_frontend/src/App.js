import React, { useState } from 'react';
import './App.css';
import Buscar from './components/buscar_filmes/Buscar';
import BemVindo from './components/bem_vindo/BemVindo';

function App() {
  return (
    <div className='App'>

        <BemVindo />
        <Buscar />
    </div>
  );
  
}

export default App;
