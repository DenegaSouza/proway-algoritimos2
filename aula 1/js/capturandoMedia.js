/*
criar variaveis para o nome do aluno, as 3 notas 
e calcular a media

podem usar 3 variaveis para as notas
ou
usar repeticao para a qtd de notas


*/

// let nome = "Everton"
// let nota1 = 6
// let nota2 = 8
// let nota3 = 7
// let media = (nota1 + nota2 + nota3) / 3

// console.log("Média é",media);

// if (media<7){
//     console.log("Reprovado");
// } else {
//     console.log("Aprovado");
// }

// let nome = "Everton"
// let nota1 = Number(prompt("Informe a Primeira Nota do aluno " + nome))
// let nota2 = Number(prompt("Informe a Segunda Nota do aluno " + nome))
// let nota3 = Number(prompt("Informe a Terceira Nota do aluno " + nome))
// let media = (nota1 + nota2 + nota3) / 3

let qtdNotas
let nota
let soma
let nome="everton"


qtdNotas = Number(prompt("Informe quantas notas deseja capturar"))

//variavel temporaria com ponto de partida.
//condicao de permanencia
//incremento ou decremento
soma=0
for(let contador=1; contador<=qtdNotas; contador++){
nota = Number( prompt("Informe a "+contador+"ª nota do aluno " +nome) )
soma+= nota

}

let media = (soma)/qtdNotas


alert("Média é " + media);
if (media < 7) {
    alert("Reprovado");
} else {
    alert("Aprovado");
}