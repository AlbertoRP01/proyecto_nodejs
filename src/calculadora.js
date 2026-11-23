function sumar(a, b) {
  // Simulación de código simple
  return a + b ;
}


// Exportamos las funciones que queremos que sean "públicas"
// para que los tests (y otras partes de la app) puedan usarlas.
// ¡No olvidar añadir la nueva función aquí!

function restar(a,b){
  return a-b;
}
function multiplicacion(a,b){
  return a*b;
}
module.exports = { sumar, restar, multiplicacion };