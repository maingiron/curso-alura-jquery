// Obtem o texto dentro da class frase
var frase = $(".frase").text();

// Retorna o tamanho do array com as palavras separadas
var numPalavras = frase.split(" ").length;

// Seta a variável no id e atribui um novo valor de acordo com o números de palavras
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

console.log(tamanhoFrase);