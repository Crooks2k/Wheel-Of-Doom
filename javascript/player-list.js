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


//eventos (son las acciones que se hacen: modificar, agregar, eliminar)

//eventlistener se refiere a un llamado que esta pendiente de la actividad sobre el elemento para ejecutar algo
addBtn.addEventListener("click", (e) =>{

    //impedir que se recargue la pagina al clickear el button
    e.preventDefault();

    if (input.value.trim() != 0){ //verificar si hay espacios vacios (si hay espacios a la derecha o izquierda se eliminaran)

    //el valor de input se guarda dentro de text
    const text = input.value;
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
    empty.style.display = "none"; //Ocultar mensaje de tareas pendientes
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

        const item = e.target.parentElement;
        ul.removeChild(item);

        //Mostrar mensaje de tareas pendientes siempre y cuando tenga 0 elementos li, si tiene alguno se ejecutra el codigo del evento de arriba y lo quitara
        const items = document.querySelectorAll("li");
        if (items.length === 0){
            empty.style.display = "block";
        }
    })
    return deleteBtn;
};
