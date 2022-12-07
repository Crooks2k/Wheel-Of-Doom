//seleccion de elementos (globales)

//seleccionar un elemento de html
const input = document.querySelector("input");

//boton de agregar
const addBtn = document.querySelector(".btn-add");

//agregar (si se pone all luego de queryselector selecciona todo)
//Lista de elementos
const ul = document.querySelector("ul");

//lista vacia (mensaje de lista vacia)
const empty = document.querySelector(".empty")

document.get
//eventos (son las acciones que se hacen: modificar, agregar, eliminar)

//eventlistener se refiere a un llamado que esta pendiente de la actividad sobre el elemento para ejecutar algo
addBtn.addEventListener("click", (e) =>{

    //impedir que se recargue la pagina al clickear el button
    e.preventDefault();

    if (input.value.trim() != 0){ //verificar si hay espacios vacios (si hay espacios a la derecha o izquierda se eliminaran)

    //el valor de input se guarda dentro de text
    const text = input.value;




//Desarrollo del guardado de nombres en local storage
    savedatainput = text //guardar el valor del input el cual se guardara en el array
    idNewPlayer = arraydatainput.length //guardar el valor de posicion dentro del array

    //copiamos el dato del input y lo pasamos por la funcion para almacenarlo
    let soundAddPlayer = new Audio("../assets/sounds/addsound.mp3")
    
    guardardatosinput() //llamamos funcion que guarda los datos del input en el array
    guardarEnStorage(arraydatainput); //llamamos funcion que guarda el array en el storage
    soundAddPlayer.play()

    if (text != "" || text.length != 0){
    //creamos un elemento tipo lista y lo guardanmos en li
    const li = document.createElement("li");
    //creamos un elemento p y lo guardamos en p
    const p = document.createElement("p");

    //guardamos el contenido de text dentro del p que creamos antes
    p.textContent = text;

    //el metodo appendchild se usa para trazar la ruta a meterse dentro del contenedor que guarda al hijo
    li.appendChild(p); //agregamos el elemento p a li
    ul.appendChild(li); //agregamos el elemento li a ul
    li.appendChild(addDeleteBtn()) //agregamos la funcion que creamos abajo
    input.value = "";
    }}
})

//funciones
function addDeleteBtn(){
    //crear una constante que 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    //asignar clase al const
    deleteBtn.className = "btn-delete";


    //crear evento
    deleteBtn.addEventListener("click", (e) =>{
        let deletesound = new Audio("../assets/sounds/deletesound.mp3") //sonido al eliminar elemento
        deletesound.play()
        const item = e.target.parentElement;
        ul.removeChild(item);


        //borrar ultimo elemento del array
        arraydatainput.pop()
        
        guardarEnStorage(arraydatainput); //llamamos funcion que guarda el array en el storage
    })
    return deleteBtn;
};

//Funcion para guardar los datos del input en un array
let popup3 = document.getElementById("Popup-3");
const arraydatainput = []
function guardardatosinput(){
    if (arraydatainput.length == 5){
        // alert("Numero maximo de jugadores alcanzados")
        popup3.classList.add("thirdPopup")
        arraydatainput = arraydatainput.substr(0, arraydatainput.length -1);
    }
    else{
        arraydatainput.push({id: idNewPlayer, playerName: savedatainput, isDead: false}); //guardo el valor del input (sacado de la funcion de + del input inicial) dentro de un array
        console.log(arraydatainput)
    }
}

function closePopup () {
    popup3.classList.remove("thirdPopup")
}

//funcion para guardar en el local storage
function guardarEnStorage(object) {
    let playersLocal = object;
  
    //Guardamos el array (el cual se colocara como object mas adelante) dentro del localstorage con el nombre playerskey
    localStorage.setItem("playersKey", JSON.stringify(playersLocal));
}
  //info para mas adelante

//let datosDeStorage = JSON.parse(localStorage.getItem("playersKey")); // Traemos el array de jugadores desde el local storage (puede estar lleno o vacío)
// DATOS