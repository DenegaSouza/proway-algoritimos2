
//organizar: alt shift F

let nome = "Everton"  //variável do tipo string
let idade = 14        //variável do tipo number
let distanciaProway = 0.4 //variavel do tipo number
let qualquer = ""

console.log("Olá meu nome é ", nome, " e tenho ", idade, " anos e moro a ", distanciaProway, "km de distância daqui"); //mesmo que escreval

//let bairro = prompt("Informe seu bairro")
//alert(bairro)

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

if (idade < 15) {
    console.log("Você ainda é uma criança!")
} else {
    console.log("Você está crescendo")
}

console.log("Escolha uma opção:");
console.log("1 - primavera");
console.log("2 - verão");
console.log("3 - outono");
console.log("4 - inverno");

let opcao = 4 //user nao está escolhendo a opcao. Fixado na var.

switch (opcao) {
    case 1:
        console.log("Você escolheu a Primavera");
        break
    case 2:
        console.log("Você escolheu o Verão");
        break
    case 3:
        console.log("Você escolheu o Outono");
        break
    case 4:
        console.log("Você escolheu o Inverno");
        break
    default:
        console.log("Você escolheu NADA");
        break
}

let quantidade = 15

for (let contador = 1; contador <= quantidade; contador++) {
    console.log("Repetindo pela", contador, "ª vez");
}

for (let variavel = 1; variavel <= 50; variavel += 10) {
    console.log("Repetindo denovo pela ", variavel, "ª vez");
}

// let resposta
// do {
//     resposta = prompt("tinham 2 dogs, pita e repita, pita morreu quem ficou?")

// }while(resposta=="repita")