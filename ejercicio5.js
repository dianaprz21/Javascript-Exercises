console.log("Ejercicio 5");

//For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1.	Write a command that prints out all of the people in the list.
console.log(people);

// 2.	Write the command to remove "Dani" from the array.
function eliminar(array, elemento) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elemento) {
            resultado.push(array[i]);
        }
    }
    return resultado;
  }
  people = eliminar(people, "Dani");
  console.log( people );

// 3.	Write the command to remove "Juan" from the array.
function eliminar(array, elemento) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elemento) {
            resultado.push(array[i]);
        }
    }
    return resultado;
  }
  people = eliminar(people, "Juan");
  console.log( people );

// 4.	Write the command to move "Luis" to the front of the array.
const moveFirst = (array, elemento) => {
    let resultado = [];
    let save = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elemento) {
            resultado.push(array[i]);
        }else{
            save = array[i];
        }
    }
    resultado.unshift(save);
    return resultado;
  };
  people = moveFirst(people, "Luis");
  console.log( people );

// 5.	Write the command to add your name to the end of the array.
people.push("Diana");
console.log( people );

// 6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
const imprimeCondicion = (array, elemento) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i] === elemento) {
            break;
        }
    }
};

imprimeCondicion(people,"Maria");

// 7.	Write the command that gives the indexOf where "Maria" is located.
console.log( people );
const numIndice = people.indexOf("Maria");
console.log(`Índice de Maria es: ${numIndice}`);

// At the end of the exercise, there should be 4 people in the array. 


