//1. Creamos el array que albergará los nombres ingresados por el usuario
let amigos = [];

//2. Creamos la funcion para permitir el agregar nombres de amigos por parte del usuario en la caja de texto
//tambien le digo que tome el valor del nombre ingresado en la caja
// me aseguro que el texto ingresado sea un string por eso uso el ===
function agregarAmigo() {
    let cajaNombre = document.getElementById("amigo");
    let nombre = cajaNombre.value;
    console.log("Tipo de dato:", typeof nombre);

    if (nombre === "") {
        alert("Por favor ingresa un nombre.");
        return; // Si está vacío, detenemos la función aquí
    }

    // 3. Damos el push para que aparezca el nombre en nuestro array
    amigos.push(nombre);
    cajaNombre.value = ""; // Limpiamos el campo de entrada

    // 4. Para mostrar los nombres en forma de listado
    mostrarAmigos();
}

// Función para mostrar todos los amigos en la lista HTML
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    // 5. Limpiar la lista antes de mostrar los nuevos elementos
    lista.innerHTML = "";

    // 6. Recorrer el arreglo (e iterar) y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
// 7. Creamos la función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return; // Si el array está vacío, detenemos la función
    }

    // Generar un índice aleatorio usando Math.random() y Math.floor()
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice generado
    let nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id="resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}
