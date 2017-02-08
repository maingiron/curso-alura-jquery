/*
 * Scrapbook
 *
 *
 * $.get("url", função)		-> Função para fazer a requisição AJAX
 * data						-> Argumento que retorna da própria requisição -- Obs.: Pode ser qualquer nome
 *
 * Math.random() 			-> Retorna um número aleatório entre 0 a 1
 * Math.floor() 			-> Arredonda o número para baixo
 *
 */


$("#botao-frase").click(fraseAleatoria);


function fraseAleatoria() {

	// Função para fazer a requisição AJAX
	$.get("http://localhost:3000/frases", trocaFraseAleatoria);

}

// data é o argumento que retorna da própria requisição -- Obs.: Pode ser qualquer nome
function trocaFraseAleatoria(data) {

	var frase = $(".frase");

	// Math.random() retorna um número aleatório entre 0 a 1
	// Math.floor() arredonda o número para baixo
	var numeroAleatorio = Math.floor(Math.random() * data.length);

	frase.text(data[numeroAleatorio].texto);

	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numeroAleatorio].tempo);

}