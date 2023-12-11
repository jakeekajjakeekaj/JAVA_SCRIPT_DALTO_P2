//EJEMPLO DE AJAX YA PROBADO EN SERVIDOR XAMPP
const peticion = new XMLHttpRequest();  //Esto crea una petición (que aún no es enviada)

// peticion.addEventListener("readystatechange", ()=> {    //El ready state, indica los cambios que se tienen, son 4 estados, los cuales significan:   1. Indica que la solicitud se creó correctamente    2. Indica que la solicitud se envió correctamente   3. Se está procesando la petición   4. Indica que está todo listo y que nos envió una respuesta y el resultado ya puede ser procesado
    // console.log(peticion.readyState);   //Estos son los números del estado de readystatechange
    // console.log("peticion.response");   //Esto indica la devolución de la información requrida
    // if(peticion.readyState == 4 && peticion.status == 200) {    //Esta es la manera QUE ANTES SE UTILIZABA, PERO ACTUALMENTE YA NO SE USA ESTO, AHORA LO QUE SE USA ES EL "LOAD", COMO SE VE A CONTINUACIÓN
        // console.log(peticion.response);  //Esto sirve para que al momento en que el ready state sea 4, ese decir que todo esté listo, se envíen los resultados de la petición
    // }
    
// });

//Lo de arriba son maneras en las que antes se trabajaba con estas herramientas, sin embargo actualmente ya no se usa eso, ahora se usa el "LOAD", como se muestra a coninuación

peticion.addEventListener("load", ()=> {    //Esta es la manera que hoy en día se usa, haciendo uso del "load"
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento no se ha encontrado el recurso"
    console.log(respuesta);
})

peticion.open("GET", "informacion.txt");   //Abre una petición, en este caso lleva 2 parámetros, el primero que es el método que se utilizará, por ejemplo get o post, y el siguiente es la URL

peticion.send();    //Envía lo que es la petición

// console.log(peticion);