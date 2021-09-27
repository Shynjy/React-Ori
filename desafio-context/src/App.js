import React from 'react';
import Produto from './Produto';

import { GlobalStorage } from './GlobalContext';
import Limpar from './Limpar';

function App() {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
}

export default App;