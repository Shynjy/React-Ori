import React, { useState } from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const [dados, setdados] = useState(luana);

  function somaDaCompra(client) {
    const total = client.compras
      .map((item) => Number(item.preco.replace('R$ ', '')))
      .reduce((a, v) => a + v);

    return total;
  }

  function trocaUser() {
    dados.cliente != 'Luana' ? setdados(luana) : setdados(mario);
  }

  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  function cor(produto) {}

  return (
    <>
      <p>Exercício 1</p>
      <button onClick={trocaUser}>Troca cliente</button>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: R$ {somaDaCompra(dados)} </p>
      {somaDaCompra(dados) > 10000 && <p>Você está gastando muito.</p>}
      <p>Exercício 2</p>

      {produtos.map((produto) => {
        return (
          Number(produto.preco.replace('R$ ', '')) > 1500 && (
            <>
              <h1>{produto.nome}</h1>
              <p>Preço: {produto.preco}</p>
              {produto.cores.map((cor) => (
                <p style={{ background: cor, color: 'white' }}> {cor} </p>
              ))}
            </>
          )
        );
      })}
    </>
  );
};

export default App;
