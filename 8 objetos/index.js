var obj = {
    nome:"caio",
    idade: 28,
    profissao: "motoboy",
    estaTrabalhando : true
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

// é possivel conscatenar conteúdo de objetos dessa maneira

console.log(obj.nome + " " + obj.idade + " " + obj.profissao);

// podemos também mudar o valor de um objeto

obj.nome = "Luiza";
obj.idade = 8;
obj.profissao = "veterinaria";
obj.estaTrabalhando = false;

console.log(obj);