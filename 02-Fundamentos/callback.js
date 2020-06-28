// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000)

let getUsuarioByiD = (id, callback) => {

    let usuario = {
        nombre: 'Marcelo',
        //id: id metodo viejo
        id

    }

    if (id === 20) {
        callback(`El usuario con id ${ id }, no existe en la BD`)
    } else {
        callback(usuario)
    }
}

getUsuarioByiD(10, (usuario) => {
    console.log('Usuario de bases de datos ', usuario);
});

getUsuarioByiD(20, (usuario) => {
    console.log('Usuario de bases de datos ', usuario);
});