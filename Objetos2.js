const caja = {
    cuadernos: 5,
    lapices: 15,
    papel: 100,
    fotografias: ["foto1.jpg", "foto2.jpg"],
    buenEstado: true
};

console.log(caja);


console.log(`Cuadernos: ${caja.cuadernos}`);
console.log(`Tipo de cuadernos: ${typeof caja.cuadernos}`);

console.log(`Lápices: ${caja.lapices}`);
console.log(`Tipo de lápices: ${typeof caja.lapices}`);

console.log(`Papel: ${caja.papel}`);
console.log(`Tipo de papel: ${typeof caja.papel}`);

console.log(`Fotografías: ${caja.fotografias}`);
console.log(`Tipo de fotografías: ${typeof caja.fotografias}`);

console.log(`¿En buen estado?: ${caja.buenEstado}`);
console.log(`Tipo de buen estado: ${typeof caja.buenEstado}`);

// node Objetos2.js //