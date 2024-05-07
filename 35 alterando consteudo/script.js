// selecionar elemento

var title = document.querySelector('#title');

console.log(title);

// innerHTML

title.innerHTML="ola";

console.log(title);



// textContent mais utilizado , recomendado e performático

var subtitle = document.querySelector('.subtitle');

subtitle.textContent = "este é o subtitulo";

console.log(subtitle);

var titulo3 = document.querySelector('#titulo3');

console.log(titulo3);

titulo3.textContent = "titulo novo";