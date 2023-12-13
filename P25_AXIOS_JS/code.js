//AXIOS

//Es una librería no nativa que básicamente llegó para reemplazar a fetch

//XMLHttpsRequest ya no es muy recomendable, no se usar mucho, tiene mayor complejidad (ES LO DE AJAX)

//fetch es bastante usado, así como axios, la única diferencia es que axios no es nativa, pero funciona con base a XMLHttpRequest, y a parte de esto está tan bien optimizado que casi no pesa nada

//Por lo que si se tiene un sitio donde se realizan muchas peticiones y ese tipo de cosas, lo mejor es usar axios por su gran optimización, sin embargo si es algo más específico y no se usarán muchas peticiones, fetch no es mala idea

//axios así como fetch está basado en promesas

//La manera de instalar la librería de axios es buscándola en internet, en un repositorio de git, y ya de ahí se baja a la documentación, en mi caso lo haré con una CDN

fetch("informacion.txt")    //Se deja el fetch para que se vea la diferencia con axios
    .then(res => res.json())    //Esta sería la linea de código que nos ahorramos utilizando axios
    .then(res => console.log(res));

  
//Por defecto axios trabaja con get
axios("informacion.txt")    //Como se ve aquí, con ambos se hace lo mismo, con la diferencia de que en este caso no es necesario desencapsular así como en fetch, lo que significa que nos ahorramos una linea de código
    // .then(res => console.log(res)); //De esta manera se accede a toda la información, ya depeniendo de lo que queramos agregamos el . por ejemplo:
    .then(res => console.log(res.data));

//A continuación se mostrarán 2 maneras de trabajar con POST, que en pocas palabras, el primero se encarga de meter primero la URL y después los datos; mientras que el segundo se encarga de meter la URL y después la configuración
axios.post("https://reqres.in/api/users", { //Esta es una manera de trabajar con lo que es POST, enviándole así un objeto para que nos lo retorne
    "nombre": "Pedro",
    "edad": 24
})
    .then(res => console.log(res));

axios("https://reqres.in/api/users", {  //Esta es otra manera de trabajar con POST, de esta manera nosotros dentro de lo que es la configuración definimos el método (POST), así como el objeto que vamos a enviar; las 2 son buenas maneras, pero para mi opinión es mejor la primera
    method: "post",
    data: {
        "nombre": "Pedro",
        "edad": 24
    }
})
    .then(res => console.log(res));