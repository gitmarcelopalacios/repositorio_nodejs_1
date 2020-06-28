// function sumar(a, b) {
//     return a + b
// }

// definición standart función de flechas.
// let sumar = (a, b) => {
//     return a + b
// }

// definición mínima para resultados de una sola línea.
//let sumar = (a, b) => a + b;

//console.log(sumar(10, 20));

// function saludar() {
//     return 'Hola Mundo';
// }

//let saludar = () => 'Hola Mundo';

// function saludar(nombre) {
//     return `Hola ${ nombre }`;
// }

// let saludar = nombre => `Hola ${ nombre }`;

// let saludar = nombre => {
//     return `Hola ${ nombre }`;
// }

// console.log(saludar('Marcelo'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

console.log(deadpool.getNombre());