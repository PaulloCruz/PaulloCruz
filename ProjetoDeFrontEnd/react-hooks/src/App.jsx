import React from "react";

// // Estados
// // o estado de uma aplicação representa as caracteristicas dela naquele momento

// const App = () =>{

//   const ativo = true

//   return(
//     <button disabled={!ativo}>{ativo ? "Botão ativo": "botão inativo"}</button>
//   )
// }

// export default App

// hooks
// os hooks sao funções especiais do react que permitem conrtrolarmos  o estado e o ciclo de vida do componentes funcionais

// react.useState- é uma função que retorna um array com 2 valores. o primeiro valor guarda o dado do estado atual, que pode ser qualquer tipo de dado como strings, arrays, numeros, boolean, null, undefined ou objetos. o segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor 

// quando a função de modificação do estado é ativada, todos os componentes que dependerem do estados, serão renderizados e os seus filhos também. é issop que garante a reatividade de componentes funcionais no react 

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [contar,setContar] = React.useState(0)

  return (
    <>
    <button onClick={()=> setAtivo(!ativo)}>
      {ativo ? "botão ativo" : "Botão Inativo"}
    </button>

    <button onClick={()=> setContar(contar+1)}></button>
    </>
  );
  
};

export default App;
