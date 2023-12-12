//EXISTE UNA MEJOR MANERA QUE USAR AJAX, Y ESTE ES FETCH, A APRTE DE SER MÁS ACTUALIZADA, LITERALMENTE SE PODRÍA DECIR QUE LLEGÓ A SUSTITUIR AJAX

peticion = fetch("https://reqres.in/api/unknown/2");    //Una diferencia bastante visible en compración de con AJAX, es que como se muestra, no se encuentra el GET expresado; así mismo nos ahorramos la linea de new XMLHttpRequest; ya que el propio fetch se encarga de eso, por lo que funciona en los navegadores diferentes

peticion.then(res => console.log(res)); //Fetch trabaja con promesas asíncronas, es por esto que usamos .then, asímismo nos devuelve el resultado de forma encapsulado, por lo que nosotros tenemos que recurrir a otras técnicas para desencapsular el resultado, pero desde ahorita ya tuvimos una respuesya encapsulada en forma de promesa

//.text
// peticion.then(res => console.log(res.text()))    //Esto de aqui devuelve la promesa pero ahora si para el fomrato que nosotros queremos; por lo que la manera de escribir esto sería
// peticion
    // .then(res => res.text())    //Aquí se obtiene la información en el formato texto ya desencapsulada
    // .then(res => console.log(res)); //Aquí se imprime la información ya desencapsulada

// peticion
    // .then(res => res.text())
    // .then(res => console.log(JSON.parse(res))); //De esta manera, sería un objeto por ejemplo, y sin el JSON.parse sería un texto

//Sin embargo nos podemos ahorrar el convertir a JSON si nosotros hacemos lo siguiente

// peticion
    // .then(res => res.json())    //De esta manera se consigue tenerlo ya en objeto JSON sin necesidad de aplicar el JSON.parse
    // .then(res => console.log(res));

fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
        "nombre": "Jake",
        "apellido": "Ekaj"
    }),
    headers: {"Content-type": "application/json"}
})
    .then(res => res.json())
    .then(res => console.log(res));

//OTRA MANERA DE HACER LO MISMO, PERO MÁS ORDENADO ES:

let headers = {
    method: "POST",
    body: '{"nombre": "Jake2", "apellido": "Ekaj2"}',   //Si son strings cortos se puede escribir de esta manera
    headers: {"Content-type": "application/json"}   //"Content-type" es la cabecera, mientras que "application/json" es el valor de la cabecera
}

fetch("https://reqres.in/api/users", headers)
    .then(res => res.json())
    .then(res => console.log(res));