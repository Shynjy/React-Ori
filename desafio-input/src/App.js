import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'CEP',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Número',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

function App() {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {})
  );

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => setResponse(response));
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }, i) => {
          return (
            <div key={`input${i}`}>
              <label htmlFor={id}>{label}</label>
              <input
                id={id}
                type={type}
                name={id}
                value={form[id]}
                onChange={handleChange}
                placeholder={label}
              />
            </div>
          );
        })}
        {response && response.ok && <p>Formulário Enviado</p>}
        <button style={{ marginTop: '1rem' }}>Enviar</button>
      </form>
    </>
  );
}

export default App;
