//Los eventos son cualquier cabmio que haya en la página
/*const button = document.querySelector(".button");

button.onclick = ()=>{  //onclick actúa como un evento
    alert("hooola");
}*/

// A pesar de que el onclick se puede hacer de esta manera, no es algo muy recomendable ya que si el usuario desactiva el JS o el navegador no lo acepta o algo por el estilo, no pasaría el evento onclick, por lo tanto para evitar esos problemas e incluso una facilidad al momento de analizar el código desde el html es mejor tenerlo directo en el html como se muestra en el html; La mejor manera de hacer esto es como se verá a continuación con los event listeners

const button = document.querySelector(".button");

// button.addEventListener("click", saludar);  //De esta manera se agrega un evento que escucha a este objeto, el primer parámetro es realizar "click" y el siguiente parámetro es una función, ES IMPORTANTE UTILIZAR FUNCIONES NORMALES

// function saludar() {    //Se tiene que hacer con funcion normal ya que NO ACEPTA FUNCION FLECHA
    // alert("hola");
// }

// button.addEventListener("click", ()=> { //De esta manera si se aceptan funciones flecha, y a su vez es la manera más recomendada de trabajar con Event Listeners
    // alert("Holaaa");
// })

// button.addEventListener("click", (e)=>{ //Parea este caso se hace el uso de "eventes" o "e", o como se quira escribir, pero es para sustituir lo que es el this
    // console.log(e);
// })

//De Aqui
// const contenedor = document.querySelector(".contenedor");

// button.addEventListener("click", (e)=> {
//     alert("Da click en el botón");
// });

// contenedor.addEventListener("click", (e)=> {
//     alert("Da click en el contenedor");
// });
//Hasta Aquí, es un ejemplo de FLUJO DE EVENTOS, en donde se ejecuta primero desde el más específico hasta el menos específico, es decir que si presionamos el botón, primero se va a detectar que se presionó el botón y después se arrojará la detección del contenedor

//Otro ejemplo de FLUJO DE EVENTOS, es que para que uno tenga mayor jerarquía, se le debe colocar al final un true
// const contenedor = document.querySelector(".contenedor");

// button.addEventListener("click", (e)=> {
//     alert("Da click en el botón");
// });

// contenedor.addEventListener("click", (e)=> {
//     alert("Da click en el contenedor");
// }, true);   //De esta manera ya se consigue que el contenedor se ejecute primero que el botón

//Otra manera de trabajar con esto, pero a la vez evitar que los demás continúen ejecutándose, es decir que se haga click en el botón pero que no se ejecute lo de los contenedores, sería con un stop propagation, es decir:
// const contenedor = document.querySelector(".contenedor");

// button.addEventListener("click", (e)=> {
//     alert("Da click en el botón");
//     e.stopPropagation();    //De esta manera, al ejecutar lo del boton, no se ejcutará el contenedor
// });

// contenedor.addEventListener("click", (e)=> {
//     alert("Da click en el contenedor");
// });