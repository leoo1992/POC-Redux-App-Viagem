import React from "react";
import { adicionarDatas } from "./redux/stores/date";
import { useDispatch } from "react-redux";
import Photos from "./Components/Photos";

function App() {
  const [partida, setPartida] = React.useState("");
  const [retorno, setRetorno] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [toggle, setToggle] = React.useState(true);

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    if (partida && retorno && nome) {
      dispatch(adicionarDatas({ partida, retorno, nome }));
    }
  }

  return (
    <>
      <div className="photos">
        <button type="button" onClick={() => setToggle(!toggle)}>
          Listar fotos
        </button>
        {toggle && <Photos />}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
        </p>

        <p>
          <label htmlFor="partida">Partida: </label>
          <input
            type="date"
            name="partida"
            id="partida"
            value={partida}
            onChange={({ target }) => setPartida(target.value)}
          />
        </p>

        <p>
          <label htmlFor="retorno">Retorno: </label>
          <input
            type="date"
            name="retorno"
            id="retorno"
            value={retorno}
            onChange={({ target }) => setRetorno(target.value)}
          />
        </p>
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}

export default App;
