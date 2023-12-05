//Eventos de la interfaz

const img = document.querySelector(".img-prueba");

//Esto se usa por si algo no carga, se ejecuta la acción especificada, estos es para videos o imágenes
// img.addEventListener("error", ()=> {
//     console.log("Ha sucedido un error");
// });

//Indica una acción de cargado, en este caso al haber sido algo cargado con éxito, se ejecuta la acción especificada
// img.addEventListener("load", ()=> {
//     console.log("Elemento cargado");
// });
//El de arriba también se usa para indicar cuando un sitio ha sido cargado, no se tiene que especificar el window antes del addEventListener, por ejemplo:
// addEventListener("load", ()=> {
//     console.log("Sitio cargado");
// });

//Esto indica que antes de que se quite el cargado de algo, por ejemplo al momento de salir del sitio a otro, sale este mensaje
// addEventListener("beforeunload", ()=> {
//     console.log("Te estás por ir del sitio");
// });
//Existe otro muy parecido que es cuando ya te fuiste, por ejemplo:
// addEventListener("unload", ()=> {
//     console.log("Te fuiste del sitio");
// });

//Esto indica cuando la resolución se cambia
// addEventListener("resize", ()=> {
//     console.log("Se ha actualizado la resolución");
// });

//Indica cuando en una página se hace scroll
// addEventListener("scroll", ()=> {
//     console.log("Se ha scrolleado");
// });

const input = document.querySelector(".input-prueba");

//Al momento de seleccionar algo, se ejecuta la acción
// input.addEventListener("select", ()=> {
//     console.log("Se ha seleccionado");
// });
//El ejemplo de arriba es algo sencillo que se puede hacer, pero por ejemplo si trabajamos con los e / events, se pueden tomar diferentes cosas, por ejemplo:
// input.addEventListener("select", (e)=> {
//     console.log(e);
// });