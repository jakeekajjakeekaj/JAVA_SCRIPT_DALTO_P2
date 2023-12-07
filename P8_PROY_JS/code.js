const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const btn = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

btn.addEventListener("click", (e)=> {
    e.preventDefault(); //Esto evita que se envíen los datos y que la página se recargue
    // alert("hola");
    let error = validarCampos();
    if (error[0]) {
        resultado.classList.remove("green");
        resultado.classList.add("red");
        resultado.innerHTML = error[1];
    }   else {
        resultado.classList.remove("red");
        resultado.classList.add("green");
        resultado.innerHTML = "Solicitud enviada correctamente";
    }
});

// **ESTAS VALIDACIONES SE PUEDEN HACER, SIN EMBARGO ES MÁS RECOMENDABLE HACERLAS CON ALGO LLAMADO "EXPRESIONES REGULARES"

const validarCampos = ()=> {
    let error = [];
    if (nombre.value.length < 5) {
        error[0] = true;
        error[1] = "**El nombre no puede contener menos de 5 caracteres.";
        return error;
    } else if (nombre.value.length > 40) {
        error[0] = true;
        error[1] = "**El nombre no puede contener mas de 40 caracteres.";
        return error;
    } else if (email.value.length < 5 ||
            email.value.length > 40 ||
            email.value.indexOf('@') == -1 ||
            email.value.indexOf(".") == -1
            ) {
        // console.log(email.value.indexOf('@'));
        error[0] = true;
        error[1] = "El mail es inválido";
        return error;
    } else if (materia.value.length < 4 ||
            materia.value.length > 40
        ) {
        error[0] = true;
        error[1] = "La materia no existe";
        return error;
    }
    error[0] = false;
    return error;
};