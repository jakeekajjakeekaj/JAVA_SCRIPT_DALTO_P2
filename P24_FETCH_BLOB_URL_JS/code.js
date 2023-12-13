const imagen = document.querySelector(".imagen");

peticion = fetch("tabla.jpg"); //Esta es una imagen, en vez de colocar una URL de otro sitio para practicar con lo que son las apis get o post, ahorita se trabajará con un archivo local


peticion.then(res => console.log(res));


peticion
    // .then(res => res.text())    //Si lo dejamos así, se imprime la imagen en forma blog, lo cual está feo porque son un buen de símbolos y ese tipo de cosas, por lo que se debería de hace así:
    .then(res => res.blob())    //De esta manera se desencapsula la imagen en un tipo blob, esto indica por ejemplo el tamaño de la imagen y el tipo de la misma
    // .then(res => console.log(res))   //Ya no es necesario escribirlo en la console
    .then(img => imagen.src = URL.createObjectURL(img));    //De esta manera imprimimos la imagen directamente en el DOM, lo cual indicaría por ejemplo "URL", indica un tipo de objeto URL, la cual es una API nativa, lo que hace es que tiene un método que crea una URL para que todo el objeto se pueda visualizar
    //En pocas palabras crea una URL donde almacena la imagen de manera temporal