function factorielle(n){
    let resultat = 1;
    for(let i = 1; i <= n; i++){
        resultat *= i;
    }
    return resultat;
}

Exemple:

console.log(factorielle(5));