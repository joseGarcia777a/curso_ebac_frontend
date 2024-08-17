let numeroUm: number = 56;
let numeroDois: number = 34;
let nome: string = ' jose';

function multiplica(fatorUm: number, fatorDois: number): number {
    return fatorUm * fatorDois;
};

function saudacao(nome: string): string {
    const saudacao = 'Ola' + nome;
    return saudacao;
};

const resultadoMultiplica = multiplica(numeroUm, numeroDois);
const saudacaoOla = saudacao(nome);

console.log(saudacaoOla + ' O resultado da multiplicacao é: ' + resultadoMultiplica);