// removendo elemento filho

var container = document.querySelector('#container');

console.log(container);

var p = document.querySelector('#container p');

console.log(p);

container.removeChild(p);

console.log(container);

// remover o elemento

var subtitle = document.querySelector('.subtitle');

subtitle.remove();
