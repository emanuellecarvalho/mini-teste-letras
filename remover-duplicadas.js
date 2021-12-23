var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function removerRepeticaoFinal(palavra) {

    menorIndiceSubparte = palavra.length - 1

    for (var i = palavra.length - 1; i >= 0; i--) {

        const primeiraParte = palavra.substring(0, i);
        const segundaParte = palavra.substring(i);

        if (primeiraParte.includes(segundaParte)) {
            menorIndiceSubparte = i;
        }

    }
    return palavra.substring(0, menorIndiceSubparte);
}




rl.on('line', entrada => {



    let palavras = entrada.split(' ');
    let palavrasSemDuplicacao = [];

    for (let i = 0; i < palavras.length; i++) {

        let palavraSemDuplicacao = removerRepeticaoFinal(palavras[i]);

        palavrasSemDuplicacao.push(palavraSemDuplicacao);

    }

    console.log(palavrasSemDuplicacao.join(' ') + '.');


})