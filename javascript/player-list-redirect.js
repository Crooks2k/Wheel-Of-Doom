//Boton redireccion player list to player avatar cards

let popup = document.getElementById("popUp");
let popup2 = document.getElementById("secondPopUp");

function llamarindexbut(){
    if(arraydatainput == ""){
        popup.classList.add("open-popup")
    }
    else if(arraydatainput.length < 5){
        // alert("Se requieren 5 jugadores")
        popup2.classList.add("secondPopup")
    }
    else{
        location.href="../pages/avatar-cards.html"
    }
};

function closePopup1 () {
    popup.classList.remove("open-popup")
}

function closePopup2() {
    popup2.classList.remove("secondPopup")
}
//math
//metodos de arrays
//como recorrer el metodo