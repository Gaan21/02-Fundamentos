
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',  //Se usan los : en Javascript
    poder: 'Regeneracion',
    //edad: 50,


    // getNombre: function () {  Funciona igual con esta linea que con la de abajo
    getNombre() {
        return `${ this.nombre }  ${ this.apellido }  ${ this.poder }`
        //Con el template string no es necesario concatenar con +
    }
}

//console.log( deadpool.getNombre() );

/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder; */
//Forma tradicional de extraer propiedades de un objeto (desestructuracion)

//const {nombre, apellido, poder, edad = 0 } = deadpool;
//Forma alternativa con menos codigo

//console.log(nombre, apellido, poder, edad);

function imprimeHeroe(heroe){
    const {nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);
}
//Desestructuracion de un objeto dentro de una funcion
imprimeHeroe(deadpool);

function imprimeHeroe2({ nombre, apellido, poder, edad = 0 }) {
    console.log( nombre, apellido, poder, edad )
}
//Desestructuracion dentro de una funcion con menos codigo y al no ser constante se puede cambiar
//alguna propiedad
imprimeHeroe2(deadpool);


const heroes = ['Deadpool', 'Superman' , 'Batman'];

//const h1 = heroes [0];
//const h2 = heroes [1];
//const h3 = heroes [2];
//Desestruturacion normal

const [ h1, h2, h3 ] = heroes;
//Desestructuracion abreviada
const [ , , h3 ] = heroes;
//Para que solo nos saque el h3

console.log( h3);