
const empleados = [
    {
        id: 1,
        nombre: 'Luciano'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];
//Las propiedades de cada objeto del array se declaran en el propio array.

const salarios = [
    {
        id: 1,
        Salario: 1000
    },

    {
        id: 2,
        Salario: 1500
    }, 
];


const getEmpleado = ( ide, llamada ) => {

    const empleado = empleados.find( (emp) => emp.id === ide )?.nombre;
    //linea para encontrar empleados con el id introducido.
    if (empleado) {
    llamada ( null, empleado);
    //Si el empleado existe envia null para el error y un objeto de tipo empleado
    }  
    else{
    llamada(`Empleado con id ${ id } no existe`)
    //Si no existe imprime esto en consola
    //No hay que poner console.log?¿?
    }
}


//Creacion de metodo
const getEmpleadoPromesa = ( ide ) => {
    //De esta manera no hay que poner un callback en la funcion getEmpleadoPromesa

    const promesa = new Promise( ( resolve,reject) => {
        //Creamos la promesa. Se podria poner return new Promise(...) 
        //y funcionaria igual sin poner el return promesa al final
        //Se ejecuta una funcion dentro de la promesa.
        const empleado = empleados.find( (emp) => emp.id === ide ) ?.nombre;
        //Se buscan objetos de tipo empleado en el array empleados y se extrae el nombre.

        if (empleado) {
            resolve ( empleado )
        }
        else{
            reject ( `No existe empleado con id ${ ide }` );
        }
            //If normal.

       /*  ( empleado )
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ ide }` ); */

            //If abreviado.
    });

    return promesa;
    //Retornamos la promesa
}


const id = 3;

getEmpleadoPromesa(id)
    .then( empleado => console.log( empleado ) ) 
    //El .then y el .catch se consideran en la misma sentencia porque el resolve reject 
    //se considera una misma sentencia por eso poniendo ; daba error.
    //Si existe el empleado entonces console log del objeto empleado
    //Cuando se resuelve la promesa devuelve un empleado y si sale el reject
    // envia el mensaje de error en consola.
    .catch( err => console.log( err) );


//INICIO DEL EJERCICIO DEL SALARIO
const getSalario = () => {

        return new Promise( ( resolve, reject ) => {
    
            const salario = salarios.find ( (s) => s.id === id )?.Salario;
            //Como id es una variable global se iguala con s.id === id
    
            //Sintaxis del if abreviado:
             (salario) 
               ? resolve( salario )
            // ? y : es para el if abreviado
               : reject (`El empleado con id ${ id } no tiene asiganado salario`);
            
        });
                 
    }
    
getSalario(id)
        //Todo el .then .catch se considera una misma instruccion.
        .then( salario => console.log(salario) )
        .catch ( err => console.log( err )) ; 


console.log('Concatenacion:')
    //Por que sale esta linea antes que la llamada a las promesas de arriba.


    //Esto es un promise hell PARECE SER QUE ES UN HORROR:
getEmpleadoPromesa(id)
    .then( empleado => {

        getSalario(id)
            .then ( salario => {

                console.log( `El empleado: ${empleado} tiene un salario de: ${salario}` )
            })
            .catch( err => console.log( err ))
    })
    .catch( err => console.log ( err ))


    //Forma mejorada:
let nombre;

getEmpleadoPromesa (id)
    .then (empleado => {
        nombre = empleado;
        //Se cambia el nombre de la variable global al string que devuelve la variable empleado
        return getSalario( id );
    //Con el return podemos devolver como valor otra promesa y encadenar otro then debajo 
    //para que no se vea tan mal como de la otra forma
    })
    .then( salario  => {
        console.log( `El empleado con nombre: ${nombre} tiene un salario de: ${salario}` )
        //Como nombre es una variable global se puede meter en esta concatenacion que solo recibe
        // en el .then el salario
    })
    .catch ( err => console.log ( err ) )
    


        


