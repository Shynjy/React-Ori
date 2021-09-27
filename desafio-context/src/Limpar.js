import React from 'react';
import { GlobalContext } from './GlobalContext';

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return <button onClick={limparDados}>Limpa Lista</button>;
};

export default Limpar;
