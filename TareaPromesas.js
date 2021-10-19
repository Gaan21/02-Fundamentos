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
const id = 3;

    getSalario(id)
    //Todo el .then .catch se considera una misma instruccion.
    .then( salario => console.log(salario) )
    .catch ( err => console.log( err )) ; 