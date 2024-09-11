function sumarArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sumarArray([1, 2, 3, 4, 5]));

function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6]));

// node Arrays.js //