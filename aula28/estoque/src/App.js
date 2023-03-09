import React from 'react';
import "./estilo.css";

function Lista() {
  let cursos = [
    'Marketing',
    'FullStack',
    'Data Analytics',
  ];

  return (
      <ul>
        {cursos.map(function (x) {
          return (<li> {x} </li>);
        })}

        {cursos.map(x => <li>{x}</li>)}
      </ul>
  );
}


export default function App() {
  let nome = "Chiquim";

  return (
    <div>
      <h1>Ola mundo</h1>
      <h2 className="red">Digital College</h2>
      <hr/>

      <p>
        Bem vindo {nome}
      </p>

      <Lista/>

      <hr/>

      <Lista/>

    </div>
  )
}
