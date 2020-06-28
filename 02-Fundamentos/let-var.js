/*
let nombre = 'Wolverine'
if (true) {
    nombre = 'Magneto'
}
console.log(nombre);
*/

let i = 'otro ámbito';

for (i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`)
}
console.log(`i: ${ i }`)