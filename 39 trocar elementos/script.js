// criar um elemento

var el = document.createElement("h3");

// inserir uma classe no elemento criado

el.classList = "testando-classe";

// criando um texto de conteudo para o elemento criado

var texto = document.createTextNode("Este é o texto");

// adicionando o conteudo criado ao elemento

el.appendChild(texto);

// teste

console.log(el);

// selecionar o elemento a ser trocado

var title = document.querySelector("#title");

// console.log(); sempre para testar se pegou o elemento correto

console.log(title);

// selecionar o pai do elemento

// voce pode selecionar pelo parentNode desta forma:

var pai = title.parentNode;

// ou pelo query selector desta forma

var body = document.querySelector("body");

// trocar os elementos

// entao voce pega o elemento pai e da instrucao para trocar o elemento filho

pai.replaceChild(el, title); 

// no parenteses primeito vai o novo elemento e depois o que sera substituido

