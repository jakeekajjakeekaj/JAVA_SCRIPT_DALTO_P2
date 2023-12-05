//--------------------- TEMPORIZADORES ----------
// ** NO SON MUY RECOMENDABLES DE USAR YA QUE CONSUMEN MUCHOS RECURSOS **

//De esta manera se usa un temporizador para ejecutar la acción indicada
// setTimeout(()=> {
//     document.write("hola");
// }, 2000);
//También se pueden utilizar funciones como se ve a continuación
// const saludar = ()=> {
//     document.write("Hola");
// }

// setTimeout(saludar, 2000);

//Para eliminar un temporizador sería como:
// const temporizador = setTimeout(()=> {
//     document.write("hola")
// }, 2000);

// clearTimeout(temporizador);

//De esta manera se realiza un intervalo de tiempo para que cada cierto tiempo se repita la acción indicada
// const intervalo = setInterval(()=> {
//     document.write("hola");
// }, 2000);

// clearInterval(intervalo);   //De esta manera se pararía el intervalo