/* FUNÇÂO - É um trecho de um código que pode ser invocado várias vezes  */

/* Declarando uma função */
/* sayMyName () dentro do parêntese é onde se passa o parâmetro da função */
function sayMyName(name){
    console.log('Yor name is '+name);
}
/* Invocando a função */
sayMyName('Cristian');

/* Calcular potência */

function quadrado(valor){
    return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

/* Incrementar Juros */
function incrementarJuros(valor,percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100)* valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementarJuros(100,10));