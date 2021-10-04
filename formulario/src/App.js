import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';

function App() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');

  const colors = ['amarelo', 'azul', 'verde', 'vermelho', 'roxo'];

  const [textarea, setTextarea] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [radio, setRadio] = React.useState('');
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(['verde']);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleRadio({ target }) {
    setRadio(target.value);
  }

  function handleCores({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          type="email"
          name="Email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          value={textarea}
          onChange={({ target }) => setTextarea(target.value)}
          rows="4"
        />
        <button>Enviar</button>
      </form>

      <form>
        <p>{select}</p>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
          id="Produtos"
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        <p>{radio}</p>
        <label>
          <input
            type="radio"
            onChange={handleRadio}
            name="produto"
            value="notebook"
          />
          Notebook
        </label>
        <label>
          <input
            type="radio"
            onChange={handleRadio}
            name="produto"
            value="smartphone"
          />
          Smartphone
        </label>
        {!termos ? <p>Por favor aceitar os termos.</p> : <p>Termos aceitos.</p>}
        <label>
          <input
            type="checkbox"
            value={termos}
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          Aceito os termos
        </label>
        <h3>Cores selecionadas:</h3>
        {colors.map((item, i) => {
          return (
            <label key={i} style={{ textTransform: 'capitalize' }}>
              <input
                type="checkbox"
                value={item}
                checked={cores.includes(item)}
                onChange={handleCores}
              />
              {item}
            </label>
          );
        })}
      </form>
      <h3>Componentes:</h3>
      <form>
        <Input id="nome2" label="Nome" value={nome} setValue={setNome} />
        <Input
          id="email"
          label="Email"
          value={email}
          setValue={setEmail}
          required
        />
        <p>
          <Select
            options={['Smartphone', 'Notebook', 'Tablet']}
            value={produto}
            setValue={setProduto}
          />
        </p>
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
