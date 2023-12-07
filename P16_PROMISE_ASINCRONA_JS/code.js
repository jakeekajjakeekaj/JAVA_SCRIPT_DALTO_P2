//Las promesas son asíncronas, esto significa que trabajan en tiempo real, a continuación se verá un ejemplo para trabajar en tiempo real después de pasado cierto tiempo en la consola

// const objeto = {
//     propiedad1: "valor1",
//     propiedad2: "valor2",
//     propiedad3: "valor3"
// };

// const obtenerInformacion = ()=> {
//     return new Promise((res, rej)=> {
//         setTimeout(()=> {res(objeto)}, 3000);
//     })
// }

// obtenerInformación().then(resultado => console.log(resultado));  //Esta manera no es la correcta

//Esto se puede trabajar con "await"

// resultado = await obtenerInformación();  //De esta manera no se puede, ya que await debe estar dentro de una función asíncrona, la manera correcta de hacerlo sería de la manera:

// const mostrarResultado = async ()=> {   //De esta manera se crea una función asíncrona
//     resultado = await obtenerInformacion();
//     console.log(resultado);
// }

// mostrarResultado();

//Otro ejemplo de cómo se puede trabajar con el await es:

// const obtenerInformacion = (text)=> {
    // return new Promise((res, rej)=> {
        // setTimeout(()=> {res(text)}, 1000); //Aquí también se indica el tiempo que tardará en aparecer, asimismo se puede trabajar por ejemplo con Math.random para que el tiempo sea aleatorio
    // })
// }

// obtenerInformacion("jeje").then(resultado => console.log(resultado));   //Esto nos sirve para ejemplos sencillos, sin embargo si queremos meter más datos y a su vez que estos trabajen con distintos tiempos, supongamos que se tiene que imprimir el jeje y después el jeje2, pero por el tiempo en el que estos valores toman en realizarse, se termina imprimiendo primero el jeje2, por lo que entonces ya estamos perdiendo nuestro órden, suponiendo este caso se debería de trabajar con funciones asíncronas como se ve a continuación:

const obtenerInformacion = (text)=> {
    return new Promise((res, rej)=> {
        setTimeout(()=> {res(text)}, Math.random()*500);
    })
}

const mostrarData = async ()=> {
    data1 = await obtenerInformacion("1: pedro");   //Para este caso se debe utilizar wl await, esto es debido a que sin esto nos estaría retornando las promesas, pero gracias a esto, con el await nosotros indicamos que espere antes de continuar con el siguiente, y lo que espera es el dato.
    // En pocas palabras accede al valor que retorna la promesa y no continúa hasta que ya exista dicho valor
    data2 = await obtenerInformacion("2: Bernardo");
    data3 = await obtenerInformacion("3: Eduardo");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();