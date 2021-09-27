import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);
  //   console.log(global);
  if (dados === null) return null;
  return (
    <div>
      Produtos:
      <ul>
        {dados.map((produto, i) => (
          <li key={i}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
