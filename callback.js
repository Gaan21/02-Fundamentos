
/* setTimeout (function() {
    console.log('Hola Mundo');
} , 1000 ) */
//Este setTimeout va a ejecutar esta funcion en un tiempo determinado 1 seg.
//Callback es una funcion que llama a otra funcion(creo)
//Una funcion que se manda como argumento a otra funcion.

/* setTimeout ( () => {
    console.log('Hola Mundo');
} , 1000 ) */
//Lo mismo pero con funcion de flecha.


const getUsuarioById = ( id , Callback ) => {
   //Para que al llamar a la funcion tengamos que poner el id y llamar a una funcion.

    const usuario = {
        idUsuario : id,
        //Como es redundante se puede poner solo id,
        nombre : 'Luciano'
    }

    setTimeout( () => {
        //console.log(usuario);
        Callback(usuario);
    } , 1500 )
}

//getUsuarioById( 10 );

getUsuarioById ( 10, ( user ) => {
    //El id que le pasamos es 10 y la funcion es una de flecha con objeto de tipo user.
    console.log ( user );
    console.log ( user.id );
    console.log ( user.nombre.toUpperCase() );
});