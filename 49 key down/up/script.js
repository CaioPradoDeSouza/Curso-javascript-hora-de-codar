// keydown

document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        console.log("Apertou enter");
    }  
    else if(event.key === "a"){
        console.log("APertou A");
    }
});


// keyup


document.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        console.log("Soltou o Enter");
    }

    if(event.key === "a"){
        console.log("Soltou o a");
    }
})