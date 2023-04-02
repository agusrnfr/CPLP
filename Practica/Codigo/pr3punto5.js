function ordenar_arreglo(arreglo, cont) {
    let i, aux, ordenado;
    do {
        ordenado = true;
        for (i = 0; i < cont - 1; i++) {
            if (arreglo[i].charCodeAt(0) > arreglo[i + 1].charCodeAt(0)) {
                aux = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = aux;
                ordenado = false;
            }
        }
    } while (!ordenado);
    return arreglo;
}

// Ejemplo de uso:
let arreglo_de_caracteres = ['b', 'c', 'a', 'd'];
let cont = 4;

console.log(ordenar_arreglo(arreglo_de_caracteres, cont))

/*
Sintaxis funcion Javascript
function name([param[, param[, ... param]]]) {

Semantica funcion Javascript
Una función en JavaScript es similar a un procedimiento: un conjunto de declaraciones que realiza una tarea o 
calcula un valor, pero para que un procedimiento califique como una función, debe tomar alguna entrada y 
devolver una salida donde exista una relación obvia entre el entrada y la salida. Para usar una función, 
debe definirla en algún lugar del ámbito desde el que desea llamarla.



Sintaxis array Javascript
const array_name = [item1, item2, ...]; 

Semantica array Javascript
El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, 
que son objetos tipo lista de alto nivel.
Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar 
operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un 
array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los 
datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript 
sean densos; esto depende de cómo el programador elija usarlos. En general estas características son 
cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.



Sintaxis do...while Javascript
do
  statement
while (condition);

Semantica do...while Javascript
La instrucción do...while crea un bucle que ejecuta una instrucción específica hasta que la condición de 
prueba se evalúa como falsa. La condición se evalúa después de ejecutar la instrucción, lo que da como 
resultado que la instrucción especificada se ejecute al menos una vez.

declaración
Una declaración que se ejecuta al menos una vez y se vuelve a ejecutar cada vez que la condición se evalúa como 
verdadera. Para ejecutar varias declaraciones dentro del ciclo, use una declaración de bloque ({... }) 
para agrupar esas declaraciones.

condición
Una expresión evaluada después de cada pasada por el bucle. Si la condición se evalúa como verdadera, 
la instrucción se vuelve a ejecutar. Cuando la condición se evalúa como falsa, el control pasa a la 
instrucción que sigue a do...while.

Nota: Use la instrucción break para detener un bucle antes de que la condición se evalúe como falsa.



Sintaxis for Javascript:
for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

Semantica for Javascript:
Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y 
separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.
expresion-inicial
Una expresión (incluyendo las expresiones de asignación) o la declaración de variable. 
Típicamente se utiliza para usarse como variable contador. Esta expresión puede opcionalmente 
declarar nuevas variables con la palabra clave var. Estas variables no son locales del bucle, 
es decir, están en el mismo alcance en el que está el bucle for. El resultado de esta expresión es descartado.

condicion
Una expresión para ser evaluada antes de cada iteración del bucle. Si esta expresión se evalúa como 
verdadera, se ejecuta sentencia. Esta comprobación condicional es opcional. Si se omite, la condición 
siempre se evalúa como verdadera. Si la expresión se evalúa como falsa, la ejecución salta a la primera 
expresión que sigue al constructor de for.

expresion-final
Una expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente 
evaluación de la condicion. Generalmente se usa para actualizar o incrementar la variable contador.

sentencia
Una sentencia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples 
sentencias dentro del bucle, utilice una sentencia block ({ ... }) para agrupar aquellas sentecias.



Sintaxis if...else Javascript
if (condición) sentencia1 [else sentencia2]

Semantica if...else Javascript:
Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición 
es evaluada como falsa, otra sentencia puede ser ejecutada.

condición
Una expresión que puede ser evaluada como verdadera o falsa.

sentencia1
Sentencia que se ejecutará si condición es evaluada como verdadera. Puede ser cualquier sentencia, 
incluyendo otras sentenccias if anidadas. Para ejecutar múltiples sentencias, use una sentencia block ({ ... }) 
para agruparlas.

sentencia2
Sentencia que se ejecutará si condición se evalúa como falsa, y exista una cláusula else. Puede ser cualquier 
sentencia, incluyendo sentencias block y otras sentencias if anidadas.
*/