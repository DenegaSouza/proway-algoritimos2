console.log("funcionando")

document.write("que legal")

document.write("<br>criar um vetor de números e solicitar do usuario uma qtd de numeros")
document.write("<br>conforme a qtd, repetir a captura numero a numero até acabar o laço")
document.write("<br>depois que acabar o laço, percorrer a lista e determinar maior e menor número")

let numeros = []
let quantidade
let numero
quantidade = Number(prompt("Informe qtos nrs deseja capturar:"))

for (let contador = 1; contador <= quantidade; contador++) {
    numero = Number(prompt("Informe o " + contador + "º número:"))

    numeros.push(numero)
}
console.log(numeros);

let menor
let maior

for (let contador = 0; contador < numeros.length; contador++) { //percorrer o vetor
    if (contador == 0) {
        menor = numeros[contador]
        maior = numeros[contador]

    } else {
        if (numeros[contador] < menor) {
            menor = numeros[contador]
        }
        if (numeros[contador] > maior) {
            maior = numeros[contador]
        }
    }
}

document.write("<br>O MAIOR número é "+maior+ " e o MENOR é " +menor)