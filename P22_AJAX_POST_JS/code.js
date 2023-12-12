//En las peticiones GET, los datos se envían mediante la URL, sin embargo en las peticiones POST, los datos no se envía por la URL, se envían mediante POST

let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load", ()=> {
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    // console.log(JSON.parse(respuesta)); //EJEMPLO GET
    console.log(JSON.parse(respuesta)); //EJEMLO POST

})

// peticion.open("GET", "https://reqres.in/api/users?page=2"); //EJEMPLO GET

// peticion.send();    //EJEMPLO GET

peticion.open("POST", "https://reqres.in/api/users");   //EJEMPLO POST

peticion.setRequestHeader("Content-type", "application/json; charset=UTF8");    //EJEMPLO POST

peticion.send(JSON.stringify({  //EJEMPLO POST
    "name": "Ruben",
    "job": "Programador",
    "id": "540",
    // "createdAt": "2023-12-12T22:15:33.503Z"
}));
