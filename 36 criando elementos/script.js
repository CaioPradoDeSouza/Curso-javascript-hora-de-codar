var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("este é o novo paragráfo");

console.log(texto);

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");

body.appendChild(novoParagrafo);

// inserindo em um container

var container = document.querySelector('#container');

var el = document.createElement("p");

el.appendChild(document.createTextNode("ola"));

console.log(el);

container.appendChild(el);
