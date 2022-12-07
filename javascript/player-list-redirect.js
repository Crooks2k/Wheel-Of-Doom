//Boton redireccion player list to player avatar cards

let popup = document.getElementById("popUp");
let popup2 = document.getElementById("popUp2");

function llamarindexbut(){
    if(arraydatainput == ""){
        popup.classList.add("open-popup")
    }
    else if(arraydatainput.length < 5){
        alert("Se requieren 5 jugadores")
    }
    else{
        location.href="../pages/avatar-cards.html"
    }
};

function closePopup () {
    popup.classList.remove("open-popup")
}
//math
//metodos de arrays
//como recorrer el metodo