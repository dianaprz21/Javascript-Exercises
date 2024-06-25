console.log("Ejercicio 6");

// Realizar una función que realice el algoritmo de burbuja.
// Entrada [3, 6, 12, 5, 100, 1 ]
// Salida [1, 3, 5, 6, 12, 100]
let lista = [3, 6, 12, 5, 100, 1];
const Burbuja = (array) => {
    
    let n, i, k, aux;
    n = array.length;
    console.log(array); // Lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (array[i] > array[i + 1]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }
    console.log(array); // Lista ordenada
}

Burbuja(lista);