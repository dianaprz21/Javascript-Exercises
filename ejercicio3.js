console.log("Ejercicio 3");

/* 
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

const numeros = [1, 2, 3, 4];

let acumulador = 0;

const suma = numeros.reduce(
(acumulador, currentValue) => acumulador + currentValue,
  0,
);

const producto = numeros.reduce(
    (acumulador, currentValue) => acumulador * currentValue,
      1,
    );

console.log(suma);
console.log(producto);