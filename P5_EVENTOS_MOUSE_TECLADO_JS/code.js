//Eventos mouse

//Click, fue el que se vió en la lección pasada

const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

//DE ESTA MANERA AL HACER DOBLE CLICK SE PRODUCE UNA ACCIÓN
// button.addEventListener("dblclick", (e)=> {
//     alert("di click en el botón");
// })

//DE ESTA MANERA AL PASAR EL MOUSE SOBRE ALGÚN LADO SE EJECUTA LA ACCIÓN
// contenedor1.addEventListener("mouseover", (e)=> {
//     alert("di click en el contenedor rojo");
// })

//DE ESTA MANERA AL PASAR EL MOUSE POR AFUERA DEL ELEMENTO INDICADO SE EJECUTA LA ACCIÓN
// contenedor1.addEventListener("mouseout", (e)=> {
//     alert("di click en el contenedor rojo");
// })

//AL MOMENTO DE DAR CLICK DERECHO SOBRE ALGÚN ELEMENTO, OCURRIRÁ LA ACCIÓN INDICADA
// contenedor1.addEventListener("contextmenu", (e)=> {
//     alert("Di click en el contenedor");
// })

// AL MOMENTO DE DAR CLICK DERECHO, PERO SOLAMENTE AL BAJAR EL BOTÓN, ES DECIR SIN NECESIDAD DE SOLTARLO, OCURRIRÁ LA ACCIÓN INDICADA
// contenedor1.addEventListener("mousedown", (e)=> {
//     alert("Di click en el contenedor");
// })

//------------------------ EVENTOS DEL TECLADO --------

const input = document.querySelector(".input-prueba");

//Esta de abajo es cuando la tecla solo se presiona
input.addEventListener("keydown", (e)=> {
    console.log("Una tecla fue presionada");
});

//Esta es cuando la tecla se presiona y suelta
input.addEventListener("keypress", (e)=> {
    console.log("Un usuario presionó una tecla");
});

//Esta es cuando la tecla se suelta
input.addEventListener("keyup", (e)=> {
    console.log("Una tecla fue soltada");
})