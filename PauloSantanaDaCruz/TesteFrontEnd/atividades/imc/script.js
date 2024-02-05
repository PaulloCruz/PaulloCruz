let nome = document.getElementsByClassName('nome').value
let altura = document.getElementsByClassName('altura').value
let peso = document.getElementsByClassName('peso').value
let botao = document.getElementsByClassName('botao')




function calcular(){
    let calculo = peso/ (altura*altura)

    if (calculo<=16.9) {
        alert('Muito abaixo do peso')        
    }
    else if(calculo>=17 && calculo<=18.4){
        alert('Muito abaixo do peso')        

    }
    else if(calculo>=18.5 && calculo<= 24.9){
        alert('Muito abaixo do peso')        

    }
    else if(calculo>=25 && calculo<=29.9){
        alert('Muito abaixo do peso')        

    }
    else if (calculo>=30 && calculo<=34.9) {
        alert('Muito abaixo do peso')        

    }
    else if(calculo>=35 && calculo<= 40){
        alert('Muito abaixo do peso')        

    }
    else if(calculo>=40){

    }
}