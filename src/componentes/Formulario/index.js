import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import ListaSuspensa from "../ListsSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h1>Preencha o card para criar os dados do colaborador</h1>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
