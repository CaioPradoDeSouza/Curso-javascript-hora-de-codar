console.log("Criou a função");

function primeiraFuncao(){

    console.log("Usou a função");
}

primeiraFuncao();

function soma(a,b){
    var soma = a + b;
    return soma;
}

var soma1 = soma(1, 2);
console.log(soma1);


var soma2 = soma(2, 2);
console.log(soma2);

console.log(soma(2,3));