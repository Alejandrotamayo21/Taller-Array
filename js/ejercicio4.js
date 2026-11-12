var estudiantes = ["Diego", "Maria", "Carlos", "Laura", "Andres", "Camila", "Juan", "Sofia"];

// Mostrar los estudiantes 
var lista = document.getElementById("lista");

for (var i = 0; i < estudiantes.length; i++) {
    lista.innerHTML = lista.innerHTML + "<li>" + estudiantes[i] + "</li>";
}

// Buscar 
function buscar() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje");

    // Validar que no este vacio
    if (nombre.trim() == "") {
        mensaje.innerHTML = "Escribe un nombre para buscar";
        return;
    }

    var buscado = nombre.trim().toLowerCase();

    // find() recorre el arreglo y devuelve el que cumpla la condición termino nuevo 
    var encontrado = estudiantes.find(function (estudiante) {
        return estudiante.toLowerCase() == buscado;
    });

    if (encontrado) {
        mensaje.innerHTML = encontrado + " sí está registrado";
    } else {
        mensaje.innerHTML = nombre + " no se encuentra registrado";
    }
}