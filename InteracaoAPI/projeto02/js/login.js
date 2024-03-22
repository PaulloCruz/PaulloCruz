    // import data from '../data.json' assert {'type': 'json'};

const data = [
    {
      "id": 1,
      "usuario": "carlos",
      "senha": "123456"
    },
    {
      "id": 2,
      "usuario": "igor",
      "senha": "654321"
    },
    {
      "id": 3,
      "usuario": "leticia",
      "senha": "123654"
    }
  ]

const btn = document.querySelector("#login")
console.log(data)
btn.addEventListener('click', (event)=>{
    event.preventDefault

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value
    console.log(user,password)

    const login = data.find((obj)=>obj.usuario === user && obj.senha === password)

    if (login) {
        window.location = '../index.html'
    }
    else{
        alert('Informações incorreta, tente novamente')
    }
})
