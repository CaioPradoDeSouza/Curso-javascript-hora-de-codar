// toLowerCase e toUpperCase

var frase = "Esta é a Frase que vamos manipular !";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLocaleLowerCase());

// trim 

var nome = "     caio      ";

var nomeTrim = nome.trim();

console.log(nome);

console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JAVASCRIPT, HTML, CSS";

console.log(tags.split(","));

var fraseDois = "Quero a ultima palavra desta frase teste";

console.log(fraseDois.indexOf("ultima"));

console.log(fraseDois.lastIndexOf("teste"));

3