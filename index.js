const numVitorias = 50;
const numDerrotas = 40;
const saldoVitorias = calculaSaldo(numVitorias,numDerrotas);
const rankHeroi = calculaRank(saldoVitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${rankHeroi}`);


function calculaSaldo (numVitorias, numDerrotas){
    return numVitorias-numDerrotas;
}

function calculaRank (saldoVitorias){
    switch(true){
        case saldoVitorias <= 10 :
            return "Ferro";

        case saldoVitorias <= 20 :
            return "Bronze";

        case saldoVitorias <= 50 :
            return "Prata";

        case saldoVitorias <= 80 :
            return "Ouro";

        case saldoVitorias <= 90 :
            return "Diamante";

        case saldoVitorias <= 100 :
            return "Lendário"; 

        case saldoVitorias > 100 :
            return "Imortal";
    }
}

