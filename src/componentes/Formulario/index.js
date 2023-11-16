import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./Formulario.css";

const equipes = [
  "Programação",
  "Front-End",
  "Data Sciense",
  "Devops",
  "UX e Design",
  "Mobile",
  "Inovação e Gestão",
];

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log(`Form foi submetido =>, ${nome}, ${cargo}, ${imagem}`);
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
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
          aoAlterado={(cargo) => setCargo(cargo)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(imagem) => setImagem(imagem)}
        />
        <ListaSuspensa obrigatorio={true} itens={equipes} label="Equipes" />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
