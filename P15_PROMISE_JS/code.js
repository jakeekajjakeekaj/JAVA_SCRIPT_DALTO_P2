//Promises

//*** LAS PROMESAS SON ASÍNCRONAS, ES DECIR QUE SE EJECUTAN EN TIEMPO REAL

// let nombre = "pedroo";

// const promesa = new Promise((resolve, reject)=> {
//     if (nombre !== "pedro") reject("Lo siento, el nombre no es Pedro");
//     else resolve(nombre);
// });

// promesa.then((resultado)=> {
//     console.log(resultado);
// }).catch((e)=> {    //Esto es para "catchear" el problema
//     console.log(e);
// })

//RETOMANDO EL EJERCICIO DE LA LECCIÓN PASADA, AHORA EN VEZ DE TRASBAJAR CON LO QUE ERAN CALLBACKS, SE TRABAJARÁ CON LAS PROMESAS, ASÍ COMO SE VE A CONTINUACIÓN:

class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

// console.log(new Persona("Ruben Loza", "@rubenloza"));
const data = [
    ["Ruben Loza", "@rubenloza"],
    ["Ruben Loza 2", "@rubenloza2"],
    ["Ruben Loza 3", "@rubenloza3"],
    ["Ruben Loza 4"]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id)=> {
    return new Promise((res, rej)=> {   //Este es la simplificación de resolve y reject
        if (personas[id] == undefined) rej("No se ha encontrado a la persona");
        else res(personas[id])
    })
}

const obtenerInstagram = (id)=> {
    return new Promise((res, rej)=> {
        if(personas[id].instagram == undefined) rej("No se ha encontrado el Instagram");
        else res(personas[id].instagram);
    })
}

let id = 1;
obtenerPersona(id).then((persona)=> {
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=> {
    console.log(instagram);
}).catch((e)=> {
    console.log(e);
})