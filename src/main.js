"use strict";
let numeroUm = 56;
let numeroDois = 34;
let nome = ' jose';
function multiplica(fatorUm, fatorDois) {
    return fatorUm * fatorDois;
}
;
function saudacao(nome) {
    const saudacao = 'Ola' + nome;
    return saudacao;
}
;
const resultadoMultiplica = multiplica(numeroUm, numeroDois);
const saudacaoOla = saudacao(nome);
console.log(saudacaoOla + ' O resultado da multiplicacao é: ' + resultadoMultiplica);
