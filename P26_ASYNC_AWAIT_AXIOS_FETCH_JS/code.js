//FETCH Y AXIOS CON AWAIT Y ASYNC

//await es un operador que esperaba a que algo terminara de ejecutarse para poder seguir a lo siguiente y lo que hacía era obtener el valor de las promesas sin tener que usar un then

//Lo de abajo de una manera de trabajarlo
// const getName = async() => {
//     fetch("informacion.txt")
//         .then(res => {
//             if(res.ok) Promise.resolve(res)
//             else Promise.reject(res);   //Si existe un error, el estatus de ok es false
//         })
//         .catch(e => console.log(e))
// }

// getName();

//Ahora se trabajará con async await para que funcione todo de manera correcta

const getNameFetch = async() => {
    let peticion = await fetch("informacion.txt");
    //utilizar el 'await', es como utilizar el '.then(res =>)' pero de forma encapsulada, es por esto que abajo se lo solicita en forma json, por lo tanto al utilizar el fetch y el await, se indica que se estará en espera y devolverá una PROMESA ENCAPSULADA
    let resultado = await peticion.json();
    console.log(resultado);
    let HTMLCode = `
        Nombre: ${resultado.nombre}<br>
        Edad: ${resultado.edad}`;
    document.querySelector("#nombre-1").innerHTML = HTMLCode;
}

// getName();

document.getElementById('nombre-1').addEventListener("click", getNameFetch);


//El ejemplo de abajo ahora es usando AXIOS
const getNameAxios = async() => {
    let resultado = await axios("informacion.txt"); //Recordemos que con axios ya se puede obtener el resultado de una y no hace falta desencapsularlo, pidiendo que sea json, text, blob, etc.
    console.log(resultado);
    let HTMLCode = `
        Nombre: ${resultado.data.nombre}<br>
        Edad: ${resultado.data.edad}`;  //Aquí se tiene que escribir .data.nombre en vez de .nombre, ya que aunque ya viene 'desencapsulado', debemos especificar dónde se encuentra la infroamción requerida
    document.querySelector("#nombre-2").innerHTML = HTMLCode;
}

document.getElementById('nombre-2').addEventListener("click", getNameAxios);