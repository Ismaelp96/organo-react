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
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa itens={equipes} label="Equipes" />
      </form>
    </section>
  );
};

export default Formulario;
