palavra = 'ratoato'

menorIndiceSubparte = palavra.length -1

for (var i = palavra.length -1; i >= 0; i--) {

    const primeiraParte = palavra.substring(0, i);
    const segundaParte = palavra.substring(i);
    
    if (primeiraParte.includes(segundaParte)) {
        menorIndiceSubparte = i;
    }
    
}
    console.log(palavra.substring(0, menorIndiceSubparte));

    

