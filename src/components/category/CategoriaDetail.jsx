import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CategoriaDetail() {
  const { id } = useParams();
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    // Função para obter os detalhes da categoria por ID
    async function fetchCategoria() {
      try {
        const response = await axios.get(`http://localhost:8084/categorias/${id}`);
        setCategoria(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes da categoria:', error);
      }
    }

    fetchCategoria();
  }, [id]);

  return (
    <div>
      <h1>Detalhes da Categoria</h1>
      {categoria ? (
        <div>
          <h2>{categoria.nome}</h2>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default CategoriaDetail;
