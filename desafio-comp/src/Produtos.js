import React from 'react';
import Produto from './Produto';
import Titulo from './Titulo';

function Produtos() {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <div>
      <Titulo>Produtos</Titulo>
      {produtos.map((produto, i) => (
        <Produto key={i + produto} {...produto} />
      ))}
    </div>
  );
}

export default Produtos;
