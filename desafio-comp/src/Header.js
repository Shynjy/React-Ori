import React from 'react';
import Link from './Link';

function Header() {
  return (
    <header>
      <Link href="/" text="Home" />
      <Link href="/produtos" text="Produtos" />
    </header>
  );
}

export default Header;
