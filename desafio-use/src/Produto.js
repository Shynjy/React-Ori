import React from 'react';

function Produto({ produto }) {
  return (
    <div>
      <h1>Nome: {produto.nome}</h1>
      <p>Preço: {produto.preco}</p>
      <p>Descrição: {produto.descricao} </p>
      <img
        style={{ height: '300px' }}
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
      />
    </div>
  );
}

export default Produto;
