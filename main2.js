const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
const compara = document.getElementById('compara');
const form = document.getElementById('formulario');
const mensagemErro = `Atenção!!!  Não e permitido (,) 'virgula', letras, ou caracteres.`;

compara.addEventListener('click', function(e){
    e.preventDefault();
    const resultado = document.getElementById('resultado');
    let numeA = parseInt(document.getElementById('numA').value);
    let numeB = parseInt(document.getElementById('numB').value);
    const mensagemSucesso = `<b> Formulario Valido!!! <br> </b> Numero B ${numeB} é maior que Numero A ${numeA}.`;
    const mensagemSemelhante = `<b>Atenção!!! <br></b> Formulario não validado. <br> Numeros semelhantes.`;
    const mensagemFracasso = `<b>Atenção!!! <br></b> Formulario não validado. <br> Numero A ${numeA} é maior que Numero B ${numeB}.`;
    let re = ',';

    if(isNaN(numeA && numeB) || numA.value.match(re) || numB.value.match(re)){
        alert(mensagemErro);
    }else{
        if(numeA < numeB){
            resultado.innerHTML = mensagemSucesso;
        }else{
            if(numeA == numeB){
                resultado.innerHTML = mensagemSemelhante;
            }else{
                resultado.innerHTML = mensagemFracasso;
            };
        };
    };

});



numA.addEventListener('keyup', function(e){
    const valida1 = e.target.value;
    let layoutErro = document.getElementById('error1');
    

    if(isNaN(valida1)){
        layoutErro.style.display ="block";
        numA.style.border = "4px solid rgba(242, 67, 67, 0.77)";
        layoutErro.innerHTML = mensagemErro;
    }else{
        layoutErro.style.display ="none";
        numA.style.border = "none";
    }
});

numB.addEventListener('keyup', function(e){
    const valida2 = e.target.value;
    let layoutErro = document.getElementById('error2');

    
    if(isNaN(valida2)){
        layoutErro.style.display ="block";
        numB.style.border = "4px solid rgba(242, 67, 67, 0.77)";
        layoutErro.innerHTML = mensagemErro;
    }else{
        layoutErro.style.display ="none";
        numB.style.border = "none";
    }
    
});
