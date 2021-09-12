import React from 'react';
import Produto from './Produto';

function App() {
  const api = 'https://ranekapi.origamid.dev/json/api/produto/';

  const estilo = { marginRight: '.5rem' };

  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    // console.log(event.target.innerText);
    const prod = event.target.innerText;

    const response = await fetch(api + prod);

    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={estilo} onClick={handleClick}>
        tablet
      </button>
      <button style={estilo} onClick={handleClick}>
        smartphone
      </button>
      <button style={estilo} onClick={handleClick}>
        notebook
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto produto={dados} />}
    </div>
  );
}

export default App;
