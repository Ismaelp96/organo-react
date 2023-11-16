import "./ListaSuspensa.css";
export function ListaSuspensa(props) {
  const aoDigitiado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        value={props.valor}
        onChange={aoDigitiado}
        required={props.obrigatorio}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
