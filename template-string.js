const nombre = 'Deadpool';

const real = 'Wade Winston';

const normal = nombre + ' ' + real;

const template = `${ nombre } ${ real }`;
//Forma alternativa con template string.

console.log(normal);
console.log(template);

console.log( normal===template);
//=== Para ver si normal es exactamente igual a template.

const html = ` 
<h1>Hola</h1>
<p>Mundo</p>
`;
//La posicion de la comilla crea un salto de linea ``

console.log(html);
