let nombre = 'Deadpool';
let real = 'Wade Winston';

//console.log(nombre + ' ' + real);
//console.log(` ${ 1 + 2} `);
//console.log(` ${ nombre } ${ real }`);

// let nombreCompleto = nombre + ' ' + real;
// let nombreTemplate = `${ nombre } ${ real }`;

// verifico si son exactamente iguales
// console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${ nombre } ${ real }`;
}

console.log(getNombre());