	//	Cantidad de elementos del arreglo
    let numeros =[1,2,3,4,5,7,10,12,15,30,33,37,1000,4000];
    console.log(numeros.length);

//Porcentaje de números pares

for (let i = 0; i < numeros.length; i++) {
if (i%2==0) {
    console.log(i);
}

}
//Porcentaje de números impares.
for (let i = 0; i < numeros.length; i++) {
if (i%2!==0) {
    console.log(i);
}

}

// Cuál es el mayor y menor valor.

console.log(Math.min.apply(null, numeros));
console.log(Math.max.apply(null, numeros));
