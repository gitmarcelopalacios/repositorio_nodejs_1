let { getUsuarioSync } = require('./usuarios/usuario');

let usuario1 = getUsuarioSync(1);
console.log('Usuario:', usuario1);

let usuario2 = getUsuarioSync(2);
console.log('Usuario:', usuario2);

console.log('Hola Mundo');