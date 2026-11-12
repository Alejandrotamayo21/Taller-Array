var productos = [];

var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nombre = document.getElementById("producto").value;
    var precio = Number(document.getElementById("precio").value);
    var cantidad = Number(document.getElementById("cantidad").value);

    var producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        subtotal: precio * cantidad
    };

    productos.push(producto);

    formulario.reset();
    mostrarTabla();
    calcularTotal();
});

function mostrarTabla() {
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    for (var i = 0; i < productos.length; i++) {
        tabla.innerHTML = tabla.innerHTML +
            "<tr>" +
            "<td>" + productos[i].nombre + "</td>" +
            "<td>" + productos[i].precio + "</td>" +
            "<td>" + productos[i].cantidad + "</td>" +
            "<td>" + productos[i].subtotal + "</td>" +
            "</tr>";
    }
}

function calcularTotal() {
    var total = 0;

    for (var i = 0; i < productos.length; i++) {
        total = total + productos[i].subtotal;
    }

    document.getElementById("total").innerHTML = "Total del inventario: " + total;
}