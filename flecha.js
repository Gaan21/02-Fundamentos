

 function sumar ( a , b ){
    return a + b;
} 

const resultado = suma(1,5)
//Funcion normal

const sumar = (a, b) => {
    return a + b;
}
//funcion de flecha

const sumar2 = (a, b) => a + b;
//Cuando la funcion de flecha tiene solo una linea y es el return se puede abreviar asi.

const saludo = () => 'Hola Mundo';
//Otro ejemplo de funcion de flecha abreviada cuando es solo una linea y tiene return.

console.log (saludo());

console.log ( sumar2 ( 20, 10 ) );
