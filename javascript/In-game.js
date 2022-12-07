//Popup you lose
let popup = document.getElementById("popUp");

function openPopup () {
    popup.classList.add("open-popup")
}

function closePopup () {
    popup.classList.remove("open-popup")
    
}

//eliminar naves
function nave1del(){
    document.getElementById("nave-1").style.display = "none"
    explosion.play()
}
function nave2del(){  //nave ganadora
    document.getElementById("nave-2").style.display = "none"
    explosion.play()
}
function nave3del(){
    document.getElementById("nave-3").style.display = "none"
    explosion.play()
}
function nave4del(){
    document.getElementById("nave-4").style.display = "none"
    explosion.play()
}
function nave5del(){
    document.getElementById("nave-5").style.display = "none"
    explosion.play()
}
    //sonido explosion naves
let explosion = new Audio("../assets/sounds/explode.webm")


//Datos de jugador
let datosExtradoidosStorage = JSON.parse(localStorage.getItem("playersKey"));
let nameplayer = datosExtradoidosStorage[0]

document.getElementById("namePlayer1").value = nameplayer.playerName
let i = 0;
function actualizardato(){
    i++
    nameplayer = datosExtradoidosStorage[i]
    document.getElementById("namePlayer1").value = nameplayer.playerName
}