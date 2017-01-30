/*
 * Scrapbook
 *
 * .val() 			-> Funciona em <input>(todos os tipos), <textarea> e <select>
 * .text() 			-> Funciona em <h1>, <span> e <p> 
 * .val() e .text() -> Ambas funções podem atribuir novos valores ou pegar os valores de texto dos elementos
 *
 */





// Obtem o texto dentro da class frase
var frase = $(".frase").text();

// Retorna o tamanho do array com as palavras separadas
var numPalavras = frase.split(" ").length;

// Seta a variável no id e atribui um novo valor de acordo com o números de palavras
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);


// on é uma função de evento do jQuery
// Primeiro parâmetro é o tipo do evento e o segundo é o que você quer que realize
var campo = $(".campo-digitacao");
campo.on("input", function() {

	// /\S+/ é uma expressão regular que busca qualquer caractere, exceto espaço vazio
	var conteudo = campo.val();
	var qtdPalavras = conteudo.split(/\S+/).length -1;
	$("#contador-palavras").text(qtdPalavras);

	var qtdCaracteres = conteudo.length;
	$("#contador-caracteres").text(qtdCaracteres);
});