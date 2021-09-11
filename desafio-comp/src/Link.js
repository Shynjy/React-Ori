import React from 'react';

function Link({ href, text }) {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
}

export default Link;
