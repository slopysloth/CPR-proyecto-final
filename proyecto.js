let precio_base = 2000;

//Valores de los recargos
let edad_18 = 0.1; // 10%
let edad_25 = 0.2; // 20%
let edad_50 = 0.3; // 30%

let casado_18 = 0.1; // 10%
let casado_25 = 0.2; // 20%
let casado_50 = 0.3; // 30%

let hijos_recargo = 0.2; // 20%

//Recargo
let recargo = 0;
let recargo_total = 0;

//Precio final
let precio_final = 0;

//Mensajes de alerta para ingresar datos
let nombre = prompt("Ingrese su nombre, por favor");
let edad = prompt("¿Cuantos años tiene? Ingrese solamente números ");

let casado = prompt("¿Está casado actualmente?", "si/no");
//Comprobamos la edad del cónyuge, solamente si se está casado/a
let edad_conyuge;
if ("SI" == casado.toUpperCase()) {
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
}
//convirtiendo las edades ingresadas a números
let edad_numero = parseInt(edad);
let edad_conyuge_numero = 0;
//convirtiendo la edad del cónyuge si se esta casado/a
if ("SI" == casado.toUpperCase()) {
    edad_conyuge_numero = parseInt(edad_conyuge);
}

let hijos = prompt("Cantidad de hijos o hijas?");

//Comprobamos la cantidad de hijos solamente si los tienen

/**
 * 1. convierta la cantidad de hijos a numero
 */

let cantidad_hijos = parseInt(hijos);

function en_rango(edad, minimo, maximo) {
    return edad >= minimo && edad < maximo;
}

/**
 * @param {number} edad
 * @param {number} precio_base
 * @returns {number}
 */
function calcular_recargo(edad, precio_base) {
    if (en_rango(edad, 18, 25)) {
        return precio_base * edad_18;
    } else if (en_rango(edad, 25, 50)) {
        return precio_base * edad_25;
    } else if (edad >= 50) {
        return precio_base * edad_50;
    } else {
        // edad negativa
        throw new Error("No se puede procesar edad negativa");
    }
}

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado

recargo_total += calcular_recargo(edad_numero, precio_base);
/**
 * 2. Recargo por la edad del conyuge
 */

if (casado) {
    recargo_total += calcular_recargo(edad_conyuge_numero, precio_base);
}

/**
 * 3. Recargo por la cantidad de hijos
 */

if (cantidad_hijos > 0) {
    for (let i = 0; i < cantidad_hijos; i++) {
        recargo_total += precio_base * 0.2; // 20%
    }
}

precio_final = precio_base + recargo_total;
//Resultado
alert("Para el asegurado " + nombre);
alert("El recargo total sera de: " + recargo_total);
alert("El precio sera de: " + precio_final);
