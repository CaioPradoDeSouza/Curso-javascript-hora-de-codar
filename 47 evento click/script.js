var btn = document.querySelector("#btn");

var body = document.querySelector("body");

console.log(btn);

btn.addEventListener("click", function(){
    console.log("clicou");

    this.style.background= "blue";
});


function mudaCor(){
    body.style.background = "red";
    
};

var stitle = document.querySelector(".subtitle");

stitle.addEventListener("click", function(){
    console.log("teste");
});

var titulo3 = document.querySelector("#titulo3");

function teste(){
    console.log("titulo 3");
}
;
//double click

stitle.addEventListener("dblclick", function(){
    console.log("click duplo");
});