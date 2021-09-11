import React from 'react';
import Home from './Home';
import Header from './Header';
import Produtos from './Produtos';

function App() {
  const { pathname } = window.location;

  console.log(pathname);

  return (
    <section>
      <Header />
      {pathname === '/' ? <Home /> : <Produtos />}
    </section>
  );
}

export default App;
