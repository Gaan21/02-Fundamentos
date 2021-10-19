
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

//Declaracion de Promesa tradicional
const getEmpleadoPromesa = ( ide ) => {
    //De esta manera no hay que poner un callback en la funcion getEmpleadoPromesa

    const promesa = new Promise( ( resolve,reject) => {
        //Creamos la promesa. Se podria poner return new Promise(...) 
        //y funcionaria igual sin poner el return promesa al final
        //Se ejecuta una funcion dentro de la promesa.
        const empleado = empleados.find( (emp) => emp.id === ide ) ?.nombre;

        if (empleado) {
            resolve ( empleado )
        }
        else{
            reject ( `No existe empleado con id ${ ide }` );
        }
            //If normal.
    });

    return promesa;
    //Retornamos la promesa
}

//Declaracion de Promesa abreviada
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

const id = 5;

//Creacion de una funcion asincrona necesaria para el await.
//Al transformar la funcion con async devuelve una promesa
const getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleadoPromesa( id );
//La solucion favorable de la promesa es lo que se le asigna a empleado
        const salario = await getSalario( id );
    //El await solo es valido en funciones async

    //return empleado;
    return `El salario del trabajador ${empleado} son: ${salario}€`

    } catch (error) {

        throw error
        //return error;
        //Para que devuelva el reject y salte error hay que poner throw,
        //con el return devuelve el error pero imprime 'TODO BIEN'
    }  
}

getInfoUsuario ( id )
.then ( msg => {
    console.log('TODO BIEN')
    console.log( msg )
})
.catch ( err => {
    console.log('TODO MAL')
    console.log( err )
});