function inserePlacar() {

	// .find realiza uma busca no filho do elemento
	// .find recebo como parâmetro seletores CSS
	var corpoTabela = $(".placar").find("tbody");
	var usuario = "Raphael";
	var numPalavras = $("#contador-palavras").text();

	var linha = novaLinha(usuario, numPalavras);
	linha.find(".botao-remover").click(removeLinha);

	// .append adiciona a string/HTML no ultimo filho do elemento selecionado
	// prepend adiciona a string/HTML no primeiro filho do elemento selecionado
	corpoTabela.prepend(linha);

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
	$(this).parent().parent().remove();

}