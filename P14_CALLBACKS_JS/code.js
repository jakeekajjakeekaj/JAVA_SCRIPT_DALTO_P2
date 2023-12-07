// function prueba(callback) { //El callback básicamente es una función que llama a otra función
    // callback("pedro");
// }

// function decirNombre(nombre) {
    // console.log(nombre);
// }

// prueba(decirNombre);

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

const obtenerPersona = (id, cb)=> { //El cb significa CallBack
    if(personas[id] == undefined) {
        cb("No se ha encontrado la persona");
    } else {
        cb(null ,personas[id], id);
    }
}

const obtenerInstagram = (id, cb)=> {
    if(personas[id].instagram == undefined) {
        cb("No se ha encontrado el Instagram");
    } else {
        cb(null, personas[id].instagram);
    }
}

obtenerPersona(3, (err, persona, id)=> {
    if (err) {
        console.log(err);
    } else {
        console.log(persona.nombre);
        obtenerInstagram(id, (err, instagram)=> {
            if(err) {
                console.log(err);
            } else {
                console.log(instagram);
            }
        });
    }
})

//Lo de arriba es un ejemplo de CALLBACKS, sin embargo como se puede apreciar, son muchos if else, que a la larga provocaría un código dificil de leer, es por esto que se crearon las llamadas promises, lo cual se verá en la siguiente lección