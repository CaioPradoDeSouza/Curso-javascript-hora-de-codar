var title = document.querySelector("#title");

// setando um atributo pelo setAtribute 


// coloca-se nos parenteses primeiro 0 tipo de atributo de pois o nome do atributo
title.setAttribute("class", "testando-atributo");

console.log(title);

// selecionando os elementos

var button = document.querySelector("#button");

var subtitle = document.querySelector(".subtitle");

// setando atributos as elementos 

button.setAttribute("disabled","disabled");

subtitle.setAttribute("id","subtt");

// remover atributo

var lista = document.querySelector("#lista");

console.log(lista);

lista.removeAttribute("id");