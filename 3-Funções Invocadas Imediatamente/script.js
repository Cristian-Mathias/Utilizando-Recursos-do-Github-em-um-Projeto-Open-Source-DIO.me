/* Invocando as Funções Imediatamente */

/* Calcular IMC */
function calcularImc(peso,altura){
    return peso / Math.pow(altura,2);
}
function classificarImc(imc){
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


/* Função Principal */
function main(){
    const peso = 72;
    const altura = 1.75;
    const imc = calcularImc(peso,altura);
    console.log(classificarImc(imc));
}
main();
main = function(){
    console.log(1);
}
main();


/* Função imediatamente invocada */
/* main */
(function (){
    const peso = 72;
    const altura = 1.75;
    const imc = calcularImc(peso,altura);
    console.log(classificarImc(imc));
})();