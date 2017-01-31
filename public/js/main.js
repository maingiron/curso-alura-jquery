/*
 * Scrapbook
 *
 *
 * .val() 			-> Funciona em <input>(todos os tipos), <textarea> e <select>
 * .text() 			-> Funciona em <h1>, <span> e <p> 
 * .val() e .text() -> Ambas funções podem atribuir novos valores ou pegar os valores de texto dos elementos
 * .attr 			-> Função do jQuery que pode pegar, incluir ou modificar um valor de atributo (textarea, input...)
 *
 *
 * .on 				-> Função de evento do jQuery
 *					-> Primeiro parâmetro é o tipo do evento e o segundo é o que você quer que realize
 *					-> Fica escutando o evento o tempo todo
 *
 *
 * .one				-> Função de evento do jQuery
 *					-> Funciona exatamente como a função on, só que escuta o evento uma única vez
 *
 *
 * setInterval 		-> Função do JavaScript que faz com que uma determinada ação (passada como primeiro parâmetro) seja executada em um intervalo de tempo (passado como segundo parâmetro)
 *					-> Toda função setInterval retorna o seu próprio id
 *
 *
 * clearInterval	-> Função do JavaScript que para a função setInterval quando tem o mesmo ID
 *
 */



var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();



// A função $() é um atalho da $(document).ready(function()
$(function (){

	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	$("#botao-reiniciar").click(reiniciaJogo);

});




function atualizaTamanhoFrase() {

	var frase = $(".frase").text();
	var numPalavras = frase.split(" ").length;
	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);

}


function inicializaContadores() {

	campo.on("input", function() {

		// /\S+/ é uma expressão regular que busca qualquer caractere, exceto espaço vazio
		var conteudo = campo.val();
		var qtdPalavras = conteudo.split(/\S+/).length -1;
		$("#contador-palavras").text(qtdPalavras);

		var qtdCaracteres = conteudo.length;
		$("#contador-caracteres").text(qtdCaracteres);
	});

}


function inicializaCronometro() {

	var tempoRestante = $("#tempo-digitacao").text();
	campo.one("focus", function() {

		$("#botao-reiniciar").attr("disabled", true);

		// setInterval é uma função do JavaScript que faz com que uma determinada ação (passada como primeiro parâmetro) seja executada em um intervalo de tempo (passado como segundo parâmetro)
		var cronometroID = setInterval(function() {

			tempoRestante--;
			$("#tempo-digitacao").text(tempoRestante);

			if(tempoRestante < 1) {
				// .attr é uma função do jQuery que pode pegar, incluir ou modificar um valor de atributo
				// disabled não tem nenhum valor, por isso, precisar passar o valor true para a função
				campo.attr("disabled", true);
				clearInterval(cronometroID);
				$("#botao-reiniciar").attr("disabled", false);
			}
			

		}, 1000);

	});

}


function reiniciaJogo() {

	campo.val("");
	campo.attr("disabled", false);
	$("#contador-palavras").text(0);
	$("#contador-caracteres").text(0);
	$("#tempo-digitacao").text(tempoInicial);

	inicializaCronometro();

}