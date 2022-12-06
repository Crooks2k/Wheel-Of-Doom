//Boton redireccion player list to player avatar cards
function llamarindexbut(){
    if(arraydatainput == ""){
        alert("Añade tu nick")
    }
    else if(arraydatainput.length < 5){
        alert("Se requieren 5 jugadores")
    }
    else{
        location.href="../pages/avatar-cards.html"
    }
};
//math
//metodos de arrays
//como recorrer el metodo