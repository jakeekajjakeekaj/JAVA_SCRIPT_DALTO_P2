let alumnos = [{
    nombre: "Ruben Loza",
    email: "jeje@gmail.com",
    materia: "Fisica"
}, {
    nombre: "Ruben Loza 2",
    email: "jeje2@gmail.com",
    materia: "Fisica 2"
}, {
    nombre: "Ruben Loza 3",
    email: "jeje3@gmail.com",
    materia: "Fisica 3"
}, {
    nombre: "Ruben Loza 4",
    email: "jeje4@gmail.com",
    materia: "Fisica 4"
}, {
    nombre: "Ruben Loza 5",
    email: "jeje5@gmail.com",
    materia: "Fisica 5"
}]

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for (let alumno in alumnos) {
    // for (dato in alumnos[alumno]) {  //DE ESTA MANERA SE HACE UN CORRIMIENTO DENTRO DEL ARRAY, PERO RESPECTO A LOS DATOS
    //     console.log(alumnos[alumno][dato])
    // }

    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;
    contenedor.innerHTML+= htmlCode;
}

boton.addEventListener("click", ()=> {
    let confirmar = confirm("¿Realmente quieres confirmar los registros?");
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (let elemento in elementos) {
            semana = elementos[elemento];
            // semana.innerHTML = document.querySelectorAll(".semana-elegida")[elemento].value;
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})