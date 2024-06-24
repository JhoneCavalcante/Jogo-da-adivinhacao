alert("Boas-vindas ao jogo do número secreto");
let numeroSecreto = Math.floor(Math.random() * 10) +1;
console.log('numeroSecreto')
let chute
while (chute != numeroSecreto) {
   chute = prompt('Escolha um número entre 1 e 10'); 
    if (chute == numeroSecreto) {
        alert(`você descobriu o número secreto ${numeroSecreto}! Parabéns!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}`);
        } else {
            alert (`O número secreto é maior do que ${chute}`);
        }
    }
}
