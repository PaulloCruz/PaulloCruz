const btnApostar = document.getElementById("btnApostar");
const btnJogar = document.getElementById("btnJogar");
const divDica = document.getElementById("outDica ");
let tentativas = [];

btnApostar.addEventListener("click", () => {
  // entrada
  const numero = document.getElementById("inNumero").value;
  const numeroSorteado = Math.floor(Math.random() * 100);
  const chances = 6;
  // saida
  const divErros = document.getElementById("outErros");
  const divChance = document.getElementById("outChances");
  const divDica = document.getElementById("outDica");

if(chances = 0){}
  if (numero == numeroSorteado) {
    alert("Voce acertou, parabueins");

  } else if (numeroSorteado > numero) {
    divDica.innerHTML = `Dica é um numero maior que ${numero} `;

    tentativas.unshift(numero);
    console.log(tentativas)
    divErros.innerHTML = `${tentativas}`;

    chances = chances -1
  } else if (numeroSorteado < numero) {
    divDica.innerHTML = `Dica é um numero numero menor que ${numero}`

    chances = chances-1
    divChance.innerHTML = `${chances}`
    tentativas.unshift(numero);
    divErros.innerHTML = `${tentativas}`;

  }
});