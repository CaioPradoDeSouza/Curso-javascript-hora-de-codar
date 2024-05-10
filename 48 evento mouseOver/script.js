// evento de mouseover

var titulo = document.querySelector("#title");

titulo.addEventListener("mouseover", function(){

    this.style.backgroundColor = "yellow";
    //console.log("mouse entrou");

    var legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");
});

titulo.addEventListener("mouseout", function(){

    this.style.backgroundColor = "#fff";
    //console.log("mouse saiu");

    var legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");

});


// afetar outros elementos com mouse over
