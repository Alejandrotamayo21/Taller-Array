let listaNumeros =[];

let formulario=document.getElementById("formulario");
let numero =document.getElementById("numero");

let lista=document.getElementById("lista");
let suma=document.getElementById("suma");
let promedio=document.getElementById("promedio");
let mayor =document.getElementById("mayor");
let menor =document.getElementById("menor");

formulario.addEventListener("submit", agregarNumeros);

function agregarNumeros(){
    //validaciones
    
    if(numero.value.trim()===""){
        alert("ingrese un numero");
        numero.style.backgroundColor="orange";
    }else{
        numero.style.backgroundColor ="#fff";
        listaNumeros.push(numero.value);


        let valor = parseFloat(numero.value);
        listaNumeros.push(valor);
        numero.value="";
        mostrarResultados();
    }
}
function  mostrarResultados(){
    lista.innerText="";
    let total =0;
    let numMayor=listaNumeros[0];
    let numMenor=listaNumeros[0];

    for(let i =0; i <listaNumeros.length; i++){
        lista.innerText+= `<li>${listaNumeros[i]} </li>`;
        total+=listaNumeros[i];

        if(listanumeros[i]>numMayor){
            numMayor=listaNumeros[i];
        }
        
        if(listaNumeros[i]>numMenor){
            numMenor=listaNumeros[i];
        }
   
    }



}
let media = total/listaNumeros.length;
suma.innerText=`Suma: ${total}`;
promedio.innerText=`Promedio: ${media}`;
mayor.innerText=`Numero mayor: ${numMayor}`;
menor.innerText=`Numero menor: ${numMenor}`;
