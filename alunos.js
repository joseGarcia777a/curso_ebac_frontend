// objetos alunos
const jose = {nome: 'jose', nota: 5};
const marcia = {nome: 'marcia', nota: 7};
const miguel = {nome: 'miguel', nota: 3};
const lindomar = {nome: 'lindomar', nota: 6};
const cristina = {nome: 'cristina', nota: 8};

// array de objetos
const estudante = [jose, marcia, miguel, lindomar, cristina];

// utilizando map para criar o objeto apertir de um array
const alunos = estudante.map(function(estudantAtual){

    estudantAtual = {
        nome: estudantAtual.nome,
        nota: estudantAtual.nota
    };
    return estudantAtual;
});

// funcao que utiliza o filter para retorna valores acima ou igual a 6
function verificaNota() {
    const notaBoa = alunos.filter(function(item) {
        const nota = item.nota >= 6;
        return  nota;
    });
    return notaBoa;
};

// exibe resultado dos alunos
const notaAcima = verificaNota();
for( let i = 0; i < notaAcima.length; i++) {
    console.log(`O aluno(a): ${notaAcima[i].nome} obtever nota ${notaAcima[i].nota} e esta aprovado`);
};