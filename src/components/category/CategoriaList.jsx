import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CategoriaList() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
   
    async function fetchCategorias() {
      try {
        const response = await axios.get('http://localhost:8084/categorias');
        setCategorias(response.data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }

    fetchCategorias();
  }, []);

  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            <Link to={`/detalhes-categoria/${categoria.id}`}>{categoria.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriaList;
