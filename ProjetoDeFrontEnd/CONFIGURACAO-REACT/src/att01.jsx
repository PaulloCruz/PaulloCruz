// Mostre os dados da aplicação, como apresentado na aula
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana
  const total = dados.compras.map((item)=>Number(item.preco.replace('R$ ',''))).reduce((a,b)=>a+b)

  console.log(total)

  return (
    <div>
      <p>Cliente: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: {''}
        <span style={dados.ativa == true ? {color:"green"} : {color:'red'}}> {dados.ativa == true ? "Ativa" : "Inativa"}
      </span>
      </p>
      <p> {total>10000 ?"Você esta gastando muito!": "esta no caminho certo"}</p>
      
    </div>
  );
};

export default App;
