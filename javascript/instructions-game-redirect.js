
let datosExtradoidosStorage = JSON.parse(localStorage.getItem("playersKey"));
let nameplayer = datosExtradoidosStorage[0]

document.getElementById("namePlayer1").value = nameplayer.playerName

function returngame(){
    location.href="../pages/in-game.html"
    datosExtradoidosStorage.shift()
}

//añadir a la funcion returngame que cuando se clickee el boton borre la primera posicion del array asi cada que se retorne aqui
//el valor 0 sera el valor 1 y asi wse movera la lista de jugadores

//en ingame hacer lo mismo del array y en el pop up win imprimir el valor actual del array