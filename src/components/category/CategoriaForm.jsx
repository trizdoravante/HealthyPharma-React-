import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CategoriaForm() {
  const [nome, setNome] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dados da categoria
    const data = {
      nome: nome,
    };

    try {
      // Função para criar ou atualizar a categoria
      await axios.post('http://localhost:8084/categorias', data);
      history.push('/categorias');
    } catch (error) {
      console.error('Erro ao criar/atualizar categoria:', error);
    }
  };

  return (
    <div>
      <h1>Formulário de Categoria</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da categoria"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CategoriaForm;
