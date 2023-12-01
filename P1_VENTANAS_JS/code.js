// let youtubeUrl = "https://youtube.com/";

// let ventana = window.open(youtubeUrl);    //De esta manera se pueden abrir nuevas ventanas apenas al recargar la página por ejemplo

// ventana.close();    //Esto cierra la ventana, en este caso a nuestra variable ventana

// ventana.closed();   //Esto da como resultado true o false si la ventana está abierta o cerrada

// ventana.stop(); //Esto detiene la carga de la 

// alert("jeje");  //Esto se usaba de la manera windows.alert, pero fue cambiado a solo alert, de cualquier manera que se sepa que esto es de la ventana

// print();    //Esto arroja una ventana de impresión

// prompt("Escribe un numero");    //Arroja una cuadro en la ventana para ingresar datos

// confirm("Estás seguro que deseas salir?");  //Arroja una pregunta en la ventana para que el usuario confirme o decline y esto devolverúa true o false

// const screen = window.screen;   //Almacena a la screen

// console.log(screen);    //Escribe el screen en la consola por lo que se pueden ver todas las propiedades
// document.write(screen); //Escribe en la pantalla "object Screen"

// const screenLeft = window.screenLeft;
// const screenTop = window.screenTop;

// document.write(screenLeft); //Escribe la distanvia de la pantalla y la ventana a la IZQUIERDA, SON ÚNICAMENTE PROPIEDADES DE LECTURA, ES DECIR QUE NOSOTROS NO PODEMOS MODIFICAR ESTA INFROMACIÓN PARA QUE NUESTRA VENTANA REACCIONES RESPECTO A LA PANTALLA
// document.write(screenTop);    //Escribe la distancia de la pantalla y la ventana en TOP

// const scrollX = window.scrollX; //Indica la cantidad de desplazamiento que se hizo en el eje x
// const scrollY = widnwos.scrollY;    //Indica la cantidad de desplazamiento que se hizo en el eje y

// window.scroll(0, 100);  //Indica el desplazamiento que se hace, para este caso se hace un desplazamiento en el eje Y de 100

// let ventana = window.open("https://youtube.com/");

// ventana.resizeBy(100, 200); //Mueve la ventana a una ubicación relativa, necesita arrancar en un servidor para que funcione

// ventana.resizeTo(100, 200); //Mueve la ventana a una ubicación absoluta, necesita arrancar en un servidor para que funcione

// ventana.moveBy(100, 200);   //Mueve la ventana a una ubicación relativa, necesita arrancar en un servidor para que funcione

// ventana.moveTo(100, 200);   //Mueve la ventana a una ubicación absoluta, necesita arrancar en un servidor para que funcione

// ---------------------------- OBJETOS BARPROP ------------------------

// console.log(window.locationbar.visible);    //Devuelve true o false
// console.log(window.menubar.visible);
// console.log(window.personalbar.visible);
// console.log(window.scrollbars.visible);
// console.log(window.statusbar.visible);
// console.log(window.toolbar.visible);

// ------------------------------- LOCATION ------------------------------

// document.write(window.location.href + "<br>");   //Obtiene la locación de la ventana

// document.write(window.location.hostname + "<br>");  //Obtiene la locación del subdominio (www) y del dominio (ej: youtube.com)

// document.write(window.location.pathname + "<br>");  //Indica en dónde nos encontramos, pero es la dirección posterior al dominio

// document.write(window.location.protocol + "<br>");  //Indica el protocolo utilizado

// document.write(window.location.assign("https://youtube.com/"));    //Carga un nuevo documento