const objs = [
    {
        nome: "caio",
        carro: "fusca",
        esta_trabalhando: true,
        hobbies: ["andar de moto", "treinar calistenia", "andar de skate"],
        detalhes_profissao: {
            "profissao": "motoboy"
    },
},
    {
        nome: "luiza",
        carro: "palio",
        esta_trabalhando: false,
        hobbies: ["andar de moto", "andar de skate"],
        detalhes_profissao: {
            "profissao": "estudante"
    },
    }    

]

console.log(objs);

console.log(typeof objs);


// JSON
// Convertendo objeto para JSON

const jsonData = JSON.stringify(objs);
console.log(jsonData);

console.log(typeof jsonData);


// Converter JSON para objeto

const jsonData2 = JSON.parse(jsonData);
console.log(jsonData2);

console.log(typeof jsonData2);

jsonData2.map((pessoa) => {
    console.log(pessoa.nome);
});