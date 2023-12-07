//try... catch

try {   //Se coloca la sentencia que se desea probar
        // sdcasdc
        // throw "Esto siempre será un error";     //El Throw SIEMPRE SE ARROJARÁ UN ERROR, INCLUSO LANZADO COMO ARREGLO U OBJETO
}
catch(err) {    //"Atrapa" el error
        // console.log(err);       //Indica el error o incluso si no indicamos nada el el catch, indicamos que el error no se muestre como un error de igual manera
        // console.log(typeof err);        //Indica el tipo de dato que es el error
        // console.log("Lo siento, ha ocurrido un error"); //De esta manera podemos colocar el mensaje de error que nosotros queramos
        // console.log(err);

} finally {     //Aunque hayan o no hayan errores, esto siempre se estará mostrando
        // console.log("Siempre me estaré mostrando");
}