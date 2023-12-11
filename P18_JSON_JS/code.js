objeto = {
    "variable1": "PEDRO",   //Al colocar la variable con comillas como se ve ahorita, se indica que es JSON
    variable2: "JORGE"  //Mientras que al no estarlo significa que es una variable
};

// objeto = '{"variable1": "PEDRO", "variable2": "JORGE"}';    //Este sería un JSON serializado debido a la manera en que están las comillas

// objeto = {"variable1": "PEDRO", "variable2": "JORGE"};  //Mientras que este sería un JSON des-cerializado debido a que no tiene las comillas simples así como en el ejemplo anterior, osea enviándolo en forma de objeto

// const codeSerializado = JSON.stringify(codeDescerializado); //Con el stringify serializas el código, osea que lo convierte en string

// const codeDescerializado = JSON.parse(codeSerializado); //Con el parse descerlializas el código, osea que lo convierte en objeto

console.log(objeto);