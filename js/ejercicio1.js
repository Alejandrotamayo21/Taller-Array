let listaNombres=[];

let inputNombre=document.getElementById("nombre");
let btnAgregar=document.getElementById("btnAgregar");
let lista=document.getElementById("lista");
let cantidad =document.getElementById("cantidad");

btnAgregar.addEventListener("click", function(){
    event.preventDefault()
    let nombre =inputNombre.value.trim().toUpperCase();

    if(nombre===""){
        alert("Ingrese el nombre");
        inputNombre.style.backgroundColor="red";
    }
    else if(listaNombres.includes(nombre)){
        alert(`El nombre: ${nombre} ya esta registrado`);
        inputNombre.value="";
    }
    else{
        listaNombres.push(nombre);
        inputNombre.value="";
        inputNombre.focus();
        inputNombre.style.backgroundColor="white";
    }

    mostrarLista();
});

function mostrarLista(){
    
    lista.innerHTML="";
    for(let i=0; i < listaNombres.length ; i++){
        lista.innerHTML+=`<li>${listaNombre[i]} </li>`;
    }
    cantidad.textContent=`Total de nombres registrados ${listaNombres.length} `
}