
import { useState } from "react";

function App() {
  // MISSÃO 1 - CONTADOR
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((anterior) => anterior + 1);
  }

  function diminuir() {
    setContador((anterior) => anterior - 1);
  }

  // MISSÃO 2 - MOSTRAR E ESCONDER AVISO
  const [visivel, setVisivel] = useState(false);

  // MISSÃO 3 - SAUDAÇÃO
  const [nome, setNome] = useState("");

  // DESAFIO FINAL - CARTÃO DE BOAS-VINDAS
  const [nomeCartao, setNomeCartao] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  // DESAFIO EXTRA - CONTADOR COM META
  const [contadorMeta, setContadorMeta] = useState(0);

  function aumentarMeta() {
    setContadorMeta((anterior) => {
      if (anterior >= 10) {
        return anterior;
      }

      return anterior + 1;
    });
  }

  function zerarMeta() {
    setContadorMeta(0);
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>Atividade 1 - useState</h1>
      <p>React - Desenvolvimento de Sistemas - SENAI</p>

      <hr />

      {/* MISSÃO 1 */}
      <section>
        <h2>Missão 1 - Contador</h2>

        <p>Valor atual: {contador}</p>

        <button onClick={aumentar}>
          Aumentar
        </button>

        <button onClick={diminuir}>
          Voltar um
        </button>
      </section>

      <hr />

      {/* MISSÃO 2 */}
      <section>
        <h2>Missão 2 - Mostrar e esconder aviso</h2>

        <button onClick={() => setVisivel(!visivel)}>
          Alternar aviso
        </button>

        {visivel && (
          <p>O aviso está visível.</p>
        )}
      </section>

      <hr />

      {/* MISSÃO 3 */}
      <section>
        <h2>Missão 3 - Saudação</h2>

        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />

        <p>Olá, {nome || "visitante"}!</p>
      </section>

      <hr />

      {/* DESAFIO FINAL */}
      <section>
        <h2>Desafio Final - Cartão de Boas-Vindas</h2>

        <div
          style={{
            border: "1px solid #888",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Seja bem-vindo!</h3>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={nomeCartao}
            onChange={(evento) =>
              setNomeCartao(evento.target.value)
            }
          />

          <br />
          <br />

          <button
            onClick={() =>
              setMostrarSaudacao(!mostrarSaudacao)
            }
          >
            Mostrar / Esconder saudação
          </button>

          {mostrarSaudacao && (
            <p>Olá, {nomeCartao || "visitante"}!</p>
          )}
        </div>
      </section>

      <hr />

      {/* DESAFIO EXTRA */}
      <section>
        <h2>Desafio Extra - Contador com Meta</h2>

        <p>Objetivo: chegar ao número 10.</p>

        <p>Contador: {contadorMeta} / 10</p>

        <button onClick={aumentarMeta}>
          Aumentar
        </button>

        <button onClick={zerarMeta}>
          Zerar
        </button>

        {contadorMeta === 10 && (
          <p>Meta atingida!</p>
        )}
      </section>

      <hr />

      <footer>
        <p>Atividade prática - React useState</p>
        <p>Desenvolvimento de Sistemas - SENAI</p>
      </footer>
    </div>
  );
}

export default App;
