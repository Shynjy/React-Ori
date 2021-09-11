import React from 'react';

function Produto({ nome, propriedades }) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '0 1rem',
        marginBottom: '1rem',
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((e, i) => (
          <li key={i + e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default Produto;
