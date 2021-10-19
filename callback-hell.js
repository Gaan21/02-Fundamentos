
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


const getEmpleado = ( id ) => {

    const empleado = empleados.find( (emp) => {
       if ( empleado ){
        emp.id === id;
        return empleado;
       }
        //return emp.id === id;    
    } )     
}
//Forma normal que no funciona


const getEmpleado2 = ( id ) => {

    const empleado = empleados.find( (emp) => emp.id === id )
         return empleado;
}
//Forma abreviada


const getEmpleado3 = ( id ) => {

    const empleado = empleados.find( (emp) => emp.id === id )

    if (empleado) {
        return empleado;
    }  
    else{
        return `Empleado con id ${ id } no existe`
    }
}
//Forma abreviada con control errores

console.log( getEmpleado3 ( 2 ) );


const getEmpleado4 = ( ide, llamada ) => {
                //Sigo dudando con las funciones de flecha vs las normales.
    const empleado = empleados.find( (emp) => emp.id === ide ) ?.nombre;
    //linea para encontrar empleados con el id introducido.
    if (empleado) {
        llamada ( null, empleado);
        //Si el empleado existe envia null para el error y un objeto de tipo empleado
        //primero se pone null para decir que  el error es false
    }  
    else{
        llamada(`Empleado con id ${ id } no existe`)
        //Si no existe imprime esto en consola
        //No hay que poner console.log?¿?
    }
}
//


console.log('A partir de aqui empieza la funcion del salario')

const getSalario = ( ide, llamar) => {
    // ? Se usa para checar que no es undefined o null y si existe devuelve la propiedad Salario
    const sueldo = salarios.find ( (s) => s.id === ide ) ?.Salario;
    //Duda en la linea 101, el predicado tiene que ser true para que devuelva valor el find.
    if (sueldo) {
        llamar(null,sueldo);
    }
    else{
        llamar(`No existe salario para el id: ${ide}`)
    }  
}

    //CALLBACK HELL.
    const id = 2;

    getEmpleado4( id, ( err, emplea ) => {
        //Dentro de llamada le metemos err y objeto tipo emplea
        if ( err ){
            console.log('ERROR');
            return console.log(err);
        }
        //Si se declara null el err se considera como false y nunca entra en el if del error.
    
        getSalario( id, (err, sueldo) => {
            if ( err ) {
               console.log('Error');
               return console.log(err);
           }

        console.log('Empleado existe');
        console.log(emplea);

        console.log('El empleado:', emplea, 'tiene un salario de:', sueldo) 
    })
    //El id por un lado y como segundo parametro se envia un callback

    
    //console.log(sueldo)
    //sueldo.Salario para que devuelva solo el salario
    //Solo ponemos sueldo porque en esa constante ya hay almacenado solo un numero y no el id y el numero
})



