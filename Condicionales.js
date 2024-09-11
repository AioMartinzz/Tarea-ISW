const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}

if (numero1 < numero2 && numero1 < numero3) {
    console.log(numero1);
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}

if (numero1 % 2 === 0) {
    console.log("par");
} else {
    console.log("impar");
}

//  node Condicionales.js //