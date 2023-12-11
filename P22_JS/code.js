let peticion;

if (window.XMLHttpRequest) {    //Esto se hace por si es un navegador viejo que no sea capaz de procesar las solicitudes, de esta manera nosotros creamos un objeto que sea capaz de soportar las solicitudes a pesar e estar en un navegador viejo
    peticion = new XMLHttpRequest();    //Crea una petición normal, en caso de que todo vaya en orden (navegadores nuevos que si lo soporten)
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");  //Crea una peticición utilizando otro tipo de objeto para simular lo que los nuevos ordenadores realizan, este mayormente es con Internet Explorer
    }

    peticion.addEventListener("load", ()=> {
        let respuesta;
        if (peticion.status == 200) respuesta = peticion.response;
        else respuesta = "Lo siento, no se ha encontrado el recurso";
        console.log(JSON.parse(respuesta).nombre);  //Recordemos que el JSON.parse descerializa al string, es decir que lo convierte a un objeto, sin el JSON.parse lo convertiría a un string, si se quiere enviar la información se debe serializar con "stringify", cosa que ahorita no es necesaria de hacer
    })

    peticion.open("GET", "informacion.txt");

    peticion.send();