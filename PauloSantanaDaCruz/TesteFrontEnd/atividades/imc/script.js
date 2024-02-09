function calcular(){

let nome = document.getElementsByClassName('nome').value
const altura = Number(document.getElementById('altura').value)
const peso = Number(document.getElementById('peso').value)

const resposta = document.getElementById('saidaDados')



    const calculo = peso/(altura*altura)
    console.log(calculo)

    // validação
    if (nome == ' '|| altura == ' ' || peso == ' '|| isNaN(altura)|| isNaN(peso)) {
        alert('ERROR, algo deu errado, verifique os campos de entrada e tente novamente')

    }
    if  (altura == ' ' ||peso == ' '||nome == ' ') {
        alert('Bora preencher os campos amigão?')
    }
    else if (isNaN(altura)|| isNaN(peso)) {
        alert('É pra digitar numero nos campos de altura e peso amigão')
    }

    if (calculo<=16.9) {
        resposta.innerHTML= `${nome} sua categoria é: Muito abaixo do peso`        
    }
    else if(calculo>=17 && calculo<=18.4){
        resposta.innerHTML= `${nome} sua categoria é: Abaixo do peso`       

    }
    else if(calculo>=18.5 && calculo<= 24.9){
        resposta.innerHTML= `${nome} sua categoria é: Peso normal`       

    }
    else if(calculo>=25 && calculo<=29.9){
        resposta.innerHTML= `${nome} sua categoria é: Sobrepeso`       

    }
    else if (calculo>=30 && calculo<=34.9) {
        resposta.innerHTML= `${nome} sua categoria é: Obesidade grau I`     

    }
    else if(calculo>=35 && calculo<= 40){
        resposta.innerHTML= `${nome} sua categoria é: Obesidade grau II`       

    }
    else if(calculo>=40){
        
        resposta.innerHTML= `${nome} sua categoria é: Obesidade grau III`  
    }

}