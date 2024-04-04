// Funções utilizando filter:

// Fácil:

// Escreva uma função que receba um array de números e retorne um novo array apenas com os números pares usando filter.
function numerosPares(array) {
    return array.filter(numero => numero % 2 === 0);
  }
  
  // Crie uma função que receba um array de strings e retorne um novo array apenas com as strings que têm mais de três caracteres usando filter.
  function stringsComMaisDeTresCaracteres(array) {
    return array.filter(string => string.length > 3);
  }
  
  // Intermediário:
  
  // Implemente uma função que receba um array de objetos e retorne um novo array apenas com os objetos que têm uma propriedade específica definida, usando filter.
  function objetosComPropriedadeEspecifica(array, propriedade) {
    return array.filter(objeto => objeto.hasOwnProperty(propriedade));
  }
  
  // Escreva uma função que receba um array de números e retorne um novo array apenas com os números que são múltiplos de 3 usando filter.
  function multiplosDeTres(array) {
    return array.filter(numero => numero % 3 === 0);
  }
  
  // Difícil:
  
  // Crie uma função que receba uma matriz (array de arrays) e retorne um novo array apenas com as linhas que têm a soma dos elementos maior que 10, usando filter.
  function linhasComSomaMaiorQueDez(matriz) {
    return matriz.filter(linha => linha.reduce((acc, curr) => acc + curr, 0) > 10);
  }
  
  // Implemente uma função que receba um array de strings e retorne um novo array apenas com as strings que começam com uma letra maiúscula, usando filter.
  function stringsComLetraMaiuscula(array) {
    return array.filter(string => /^[A-Z]/.test(string));
  }
  
  // Funções utilizando reduce:
  
  // Fácil:
  
  // Escreva uma função que receba um array de números e retorne a soma de todos os elementos usando reduce.
  function somaElementos(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Crie uma função que receba um array de strings e retorne uma única string concatenando todos os elementos usando reduce.
  function concatenarStrings(array) {
    return array.reduce((acc, curr) => acc + curr, '');
  }
  
  // Intermediário:
  
  // Implemente uma função que receba um array de objetos e retorne a soma de uma propriedade específica de todos os objetos usando reduce.
  function somaPropriedadeEspecifica(array, propriedade) {
    return array.reduce((acc, curr) => acc + curr[propriedade], 0);
  }
  
  // Escreva uma função que receba um array de números e retorne o produto de todos os elementos usando reduce.
  function produtoElementos(array) {
    return array.reduce((acc, curr) => acc * curr, 1);
  }
  
  // Difícil:
  
  // Crie uma função que receba uma matriz (array de arrays) e retorne um único valor com a soma de todos os elementos da matriz, usando reduce.
  function somaElementosMatriz(matriz) {
    return matriz.reduce((acc, linha) => acc + linha.reduce((acc, curr) => acc + curr, 0), 0);
  }
  
  // Implemente uma função que receba um array de números e retorne o maior número usando reduce.
  function maiorNumero(array) {
    return array.reduce((max, curr) => Math.max(max, curr), -Infinity);
  }
  
  // Teste das funções:
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numerosPares(numeros)); // Saída esperada: [2, 4, 6, 8, 10]
  console.log(stringsComMaisDeTresCaracteres(["casa", "carro", "bicicleta", "praia"])); // Saída esperada: ["bicicleta", "praia"]
  console.log(objetosComPropriedadeEspecifica([{ nome: "João", idade: 30 }, { nome: "Maria" }, { nome: "José", idade: 25 }], "idade")); // Saída esperada: [{ nome: "João", idade: 30 }, { nome: "José", idade: 25 }]
  console.log(multiplosDeTres(numeros)); // Saída esperada: [3, 6, 9]
  console.log(linhasComSomaMaiorQueDez([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Saída esperada: [[4, 5, 6], [7, 8, 9]]
  console.log(stringsComLetraMaiuscula(["Casa", "carro", "Bicicleta", "praia"])); // Saída esperada: ["Casa", "Bicicleta"]
  console.log(somaElementos(numeros)); // Saída esperada: 55
  console.log(concatenarStrings(["Olá", " ", "mundo", "!"])); // Saída esperada: "Olá mundo!"
  console.log(somaPropriedadeEspecifica([{ valor: 10 }, { valor: 20 }, { valor: 30 }], "valor")); // Saída esperada: 60
  console.log(produtoElementos([1, 2, 3, 4])); // Saída esperada: 24
  console.log(somaElementosMatriz([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Saída esperada: 45
  console.log(maiorNumero([10, 5, 20, 15])); // Saída esperada: 20
  