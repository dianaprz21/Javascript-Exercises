console.log("Ejercicio 2");

/* Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */

const doubleValue = ( currentValue ) =>{
    return currentValue * 2;
};

const array = [1, 2, 4, 5];

const doubleArray = array.map( doubleValue );
console.log( doubleArray )

/////////////////////////////////////////////////////////

/* const numeros = [1, 2, 4, 5];

const duplicarNumeros = numeros.map( currentValue=>currentValue2*2 );
// const duplicarNumeros = numeros.map( function doble(currentValue){ return currentValue } );
console.log( duplicarNumeros ); */
