/*
 * Scrapbook
 *
 *
 * .show()				-> Adiciona um elemento (display block)
 * .hide()				-> Esconde um elemento (display none)
 * .toggle()			-> Adiciona ou esconde um elemento (display block/none)
 * .slideDown()			-> Mesma funcionalidade que a função show(), mas realiza a transição de uma maneira mais suave
 * .slideUp()			-> Mesma funcionalidade que a função hide(), mas realiza a transição de uma maneira mais suave
 * .slideToggle() 		-> Realiza a função do slideDown() e slideUp()
 *	
 * .slideDown(100)
 * .slideUp(200)
 * .slideToggle(300)
 * .fadeOut(400)
 * .fadeIn(500)
 * .fadeToggle(600) 	-> Argumento em milissegundos para realizar a transição
 *
 * .fadeOut()			-> Remove a opacidade do elemento até um ponto e depois modifica a sua propriedade display
 * .fadeIn()			-> Adiciona a opacidade do elemento até um ponto e depois modifica a sua propriedade display
 * .fadeToggle()		-> Realiza a função do fadeOut() e fadeIn()
 *
 * .stop() 				-> Interrompe uma animação que está acontecendo e a próxima é iniciada
 *
 * .offset() 			-> Retorna a distância em que o elemento está do topo e da esquerda da página
 *
 * .animate() 			-> Realiza a animação e recebe dois parâmetros, um objeto que contém as propriedades CSS a serem animadas e os seus valores, e o tempo de duração da animação
 *
 *
 *
 */



$("#botao-placar").click(mostraPlacar);


function inserePlacar() {

	// .find realiza uma busca no filho do elemento
	// .find recebo como parâmetro seletores CSS
	var corpoTabela = $(".placar").find("tbody");
	var usuario = "Usuário Padrão";
	var numPalavras = $("#contador-palavras").text();

	var linha = novaLinha(usuario, numPalavras);
	linha.find(".botao-remover").click(removeLinha);

	// .append adiciona a string/HTML no ultimo filho do elemento selecionado
	// prepend adiciona a string/HTML no primeiro filho do elemento selecionado
	corpoTabela.prepend(linha);

	$(".placar").slideDown(500);
	scrollPlacar();

}


function scrollPlacar() {

	// offset retorna a distância em que o elemento está do topo e da esquerda da página
	var posicaoPlacar = $(".placar").offset().top;

	// animate realiza a animação e recebe dois parâmetros, um objeto que contém as propriedades CSS a serem animadas e os seus valores, e o tempo de duração da animação
	$("body").animate( {

		scrollTop: posicaoPlacar + "px"
	}, 1000);
	
}


function novaLinha(usuario, palavras) {

	// Criar um novo elemento HTML (DOM), e para isso, deve passar uma tag HTML completa(com os sinais < e >).
	var linha = $("<tr>");

	var colunaUsuario = $("<td>").text(usuario);
	var colunaPalavras = $("<td>").text(palavras);
	var colunaRemover = $("<td>");

	var link = $("<a>").addClass("botao-remover").attr("href", "#");
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

	link.append(icone);
	colunaRemover.append(link);

	linha.append(colunaUsuario);
	linha.append(colunaPalavras);
	linha.append(colunaRemover);

	return linha;

}


function removeLinha() {

	// .preventDefault evita o comportamento padrão do elemento selecionado, neste caso, a tag a, que tem o comportamento de redirecionar para outro lugar
	event.preventDefault();

	// .parent pega o pai do this
	var linha = $(this).parent().parent(); 

	linha.fadeOut(1000);

	setTimeout(function() {
		
		linha.remove();
	}, 1000);
	
}


function mostraPlacar() {

	// .stop interrompe uma animação que está acontecendo e a próxima é iniciada
	$(".placar").stop().slideToggle(600);

}