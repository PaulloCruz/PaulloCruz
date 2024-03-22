document.addEventListener('DOMContentLoaded', ()=>{
    const urlParam= new URLSearchParams(window.location.search)
    console.log(urlParam)
    const paramIndex = urlParam.get('index')
    
    const url = `https://swapi.dev/api/people/${parseint(paramIndex+1)}/`
    console.log(url)

    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('erro de red: codigo'+response.status)
        }
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>console.log(err)){

    }
})

function personagem(item){
    const personagemImg = document.querySelector('.personagemimg')
    const nome = document.querySelector('.nome')
    const altura = document.querySelector('.altura')
    const peso = document.querySelector('.personagemimg')
    const genero = document.querySelector('.personagemimg')
    const cor_cabelo = document.querySelector('.personagemimg')
    const cor_oho = document.querySelector('.personagemimg')
    const cor_pele = document.querySelector('.cor_pele')
    const data_nascimento = document.querySelector('.data_nascimento')
}

personagemImg.src = ``