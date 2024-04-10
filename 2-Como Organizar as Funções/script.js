/* Organizando uma função */

/* Calcular IMC */
function calcularImc(peso,altura){
    return peso / Math.pow(altura,2);
}
function classificarImc(){
    if(imc < 18.5){
        return 'Abaixo do peso';
    }else if(imc >= 18.5 && imc < 25){
        return 'Peso normal';
    }else if(imc >= 25 && imc < 30){
        return 'Acima do peso';
    }else if(imc >= 30 && imc < $0){
        return 'Obeso';
    }else {
        return 'Obesidade morbida';
    }
}
const peso = 72;
const altura = 1.75;
const imc = calcularImc(peso,altura);




/* Calculando Juros */
function incrementarJuros(valor,percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100)* valor;
    return valor + valorDeAcrescimo;
}



/* Função Principal */
function main(){
    console.log("Programa principal");
    console.log(incrementarJuros(100,10));
    console.log(classificarImc(imc));
}
main();





