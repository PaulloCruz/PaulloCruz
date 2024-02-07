let mercadoria = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];

  function precoMinimo(arrayProduto, valorMinimo){
    return arrayProduto.filter((produto=>produto.preco >=valorMinimo))
  }
  const produtoAcimaDoMinimo = precoMinimo(mercadoria,500)
  console.log(produtoAcimaDoMinimo)
