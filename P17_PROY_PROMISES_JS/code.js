const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 2",
        nota: 7
    }, {
        nombre: "Calculo 1",
        nota: 4
    }, {
        nombre: "Programacion 1",
        nota: 9
    }, {
        nombre: "Español 1",
        nota: 6
    }, {
        nombre: "Matemáticas 1",
        nota: 8
    }
]

const obtenerMateria = (id)=> {
    return new Promise((res, rej)=> {
        materia = materias[id];
        if(materia == undefined) rej ("Lo siento, pero la materia no existe");
        else setTimeout(()=> {res(materia)}, Math.random()*1000);
    });
}

const devolverMaterias = async ()=> {
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        // console.log(materia[i]);
        let newHTMLCode = `
        <div class="materia">
            <div class= "nombre">${materia[i].nombre}</div>
            <div class= "nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();