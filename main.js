
// Codigo antigo teste 1.

const form = document.getElementById('formulario');
const compara = document.getElementById('compara');
const verificaA = document.getElementById('numA');
const verificaB = document.getElementById('numB');
const mensagemErro = document.querySelector('.error');

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(isNaN(verificaA.value) || isNaN(verificaB.value)){
        console.log("nao e numero");
        // aqui vai a mensagem de erro caso o usuario digite letras ou virgula.
        mensagemErro.innerHTML = "Não e permitido (,) 'virgula', letras, ou caracteres.";
        mensagemErro.classList.add('error');
        mensagemErro.style.padding = '5%';
    };
});

compara.addEventListener('click', function(){

    let numA = parseInt(document.getElementById('numA').value);
    let numB = parseInt(document.getElementById('numB').value);
    let resultado = document.getElementById('resultado');

    if(numA < numB){
        resultado.innerHTML = "Formulario Valido, o numero B: (" + numB + ") é maior que o numero A: (" + numA + ") !!!";
        console.log(" Formulario Valido, o numero B: (" + numB + ") é maior que o numero A: (" + numA + ") !!!");
    }else{
        if(numA == numB){
            resultado.innerHTML = "Atenção!!!  Formulario não vaildado, Numeros semelhantes.";
        }else{
            resultado.innerHTML = "Atenção!!!  Formulario não vaildado, numero A: (" + numA + ") maior que numero B";
            console.log("Atenção!!!  Formulario não vaildado, numero A: (" + numA + ") maior que numero B");
        };
    };

});




