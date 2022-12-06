let datosExtradoidosStorage = JSON.parse(localStorage.getItem("playersKey"));
nameplayer1 = datosExtradoidosStorage[0]
nameplayer2 = datosExtradoidosStorage[1]
nameplayer3 = datosExtradoidosStorage[2]
nameplayer4 = datosExtradoidosStorage[3]
nameplayer5 = datosExtradoidosStorage[4]

document.getElementById("namePlayer1").value = nameplayer1.playerName
document.getElementById("namePlayer2").value = nameplayer2.playerName
document.getElementById("namePlayer3").value = nameplayer3.playerName
document.getElementById("namePlayer4").value = nameplayer4.playerName
document.getElementById("namePlayer5").value = nameplayer5.playerName


//Tener en cuenta: INGAME interactuar de igual forma con el array de los {} sobre la propiedad isdead para saber si esta vivo o muerto y descartarlo.

//Funcion para redirijir a la pantalla InGame
function llamarindexbut(){
    window.location.href="../pages/in-game.html"
}