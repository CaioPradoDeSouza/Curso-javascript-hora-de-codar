// sintaxe

function primeiraFuncao(){

    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("Esperou por isto!");
            resolve();
        }, 1000)
    })

}

// função assincrona inicia com async

async function segundaFuncao(){

    // inicia-se a função

    console.log("iniciou");

    // await aguarda o resultado prometido

    await primeiraFuncao();

    // apos receber o resultado segue o codigo

    console.log("terminou");
}

segundaFuncao();


// Prática

function getUser(id){

    return fetch(`http://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err))

}

async function showUserName(id){

    try {
        const user = await getUser(id)

        console.log(`O nome é: ${user.data.first_name}`)
    } catch(err){
        console.log(`ERRO: ${err}`)
    }

}

showUserName(8);