function Automovel (marca, ano, valor) {
    this.marca = marca;
    this.ano = ano;
    
    let _valor = valor;

    this.getValor = function() {
        return _valor;
    };

    this.finaciado = function() {
        const novoValor = _valor * 2;
        _valor = novoValor;

        return _valor;
    };
};

function Carro (modelo, marca, ano, valor) {
    this.modelo = modelo;

    Automovel.call (this, marca, ano, valor);
};

function Motocicleta (modelo, marca, ano, valor) {
    this.modelo = modelo;

    Automovel.call (this, marca, ano, valor);
    this.finaciado = function() {
        const novoValor = this.getValor() * 1.5;
        return novoValor;
    };
};

const automovelUm = new Carro('prisma', 'chevrolet', 2018, 40000);
const automovelDois = new Motocicleta('cb500', 'yhamaha', 2012, 15000);

// info carro
console.log("Dados do veiculo: ");
console.log("Modelo: ", automovelUm['modelo'],"Marca: ", automovelUm['marca'],"Ano: ", automovelUm['ano']);
console.log("valor a vista: ", automovelUm.getValor(), "valor financiado: ", automovelUm.finaciado());

// info moto
console.log("Dados do veiculo: ");
console.log("Modelo: ", automovelDois['modelo'],"Marca: ", automovelDois['marca'],"Ano: ", automovelDois['ano']);
console.log("valor a vista: ", automovelDois.getValor(), "valor financiado: ", automovelDois.finaciado());