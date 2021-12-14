/*
solicite uma qtd definida de numero a serem capturados
para cada captura, verificar qual o maior numero e o menor numero
Após a captura, exibir o maior e o menor e a media geral deste números
*/



let qtdNumeros = Number(prompt("Informe a quantidade de números a serem calculados"))
let maior
let menor
let soma
let media

soma=0
for (let contador = 1; contador <= qtdNumeros; contador++) {
    let numero = Number(prompt("Informe o " + contador + "º número"))
    soma+=numero

    if (contador == 1) {
        menor = numero
        maior = numero
    } else {
        if (numero < menor) {
            menor = numero
        }
        if (numero > maior) {
            maior = numero
        }
    }
}

media=soma/qtdNumeros
alert("O MAIOR número foi " + maior)
alert("O MENOR número foi " + menor)
alert("Média é " + media)
