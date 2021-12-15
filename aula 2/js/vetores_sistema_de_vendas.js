//precisamos catalogar todos os veículos e seus valores
//para isso precisamos de 2 vetores; 1 para nomes e outro para valores
//cada posicao sera respectivamente nome e valor.
//a qtd de veiculos é indefinida até que informe que nao deseja continuar o cadastro.
//apos o cadastro exibir o nome e valor do 1o veiculo e do ultimo.

//primeiro é lista[0]
//ultimo é lista [lista.length-1]

let nomes = []
let valores = []
let resposta
let nome
let valor

do {
nome=prompt("Informe o nome do veículo") 
nomes.push(nome)

valor= Number(prompt("Informe o valor do veículo " +nome))
valores.push(valor)

resposta = prompt("Deseja continuar? S ou N")


} while (resposta == "S" || resposta == "s") {

alert("O primeiro veículo foi "+nomes[0] +" custando R$"+valores[0])
alert("O último veículo foi "+nomes[nomes.length-1] +" custando R$"+valores[valores.length-1])

}
