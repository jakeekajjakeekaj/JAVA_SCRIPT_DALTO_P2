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

button.addEventListener("click", ()=> { //De esta manera si se aceptan funciones flecha, y a su vez es la manera más recomendada de trabajar con Event Listeners
    alert("Holaaa");
})