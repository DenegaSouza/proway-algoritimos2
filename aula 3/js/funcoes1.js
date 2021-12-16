console.log("ok");

let nome = capturaTexto("Informe seu nome") //funcao capturaTexto passando o parametro "frase"
let idade = capturaNumeroEspecial("Informe sua idade")
let anoAtual = capturaNumeroEspecial("Informe o ano atual")
let cidade = capturaTexto("Informe sua cidade")


//declaracao da funcao
//tem palavra reservada -> function
//tem nome da função -> meApresentar
//() gaveta de parametros
// {} = escopo: o que será executado
// conteudo que quero executar
function meApresentar() {
    let nome = "everton"
    let idade = 36

    console.log("Oi, me chamo " + nome + " e tenho " + idade + " anos");

}

meApresentar() //chamada de função.

function retornoSimples() {
    return "ta aqui o que vc precisa"
}

function retorneInteiro() {
    return 14
}

console.log("quero saber o retorno da função " + retorneInteiro());

//qdo chamo essa funcao devo informar um valor para este parametro
function capturaTexto(texto) {
    let temporario = prompt(texto)
    return temporario
}

//nao preciso passar parametros pois nao tem
function capturaNumero() {
let temporario = Number(prompt("Informe um número"))
return temporario
}

//funcao recebe parametro onde a funcao capturaNumero nao recebia
//desta forma a funcao se torna dinamica pois é parametrizavel.
function capturaNumeroEspecial(frase){
let temporario = Number(prompt(frase))
return temporario
}


console.log("Oi, me chamo " + nome + " e tenho " + idade + " anos. O ano é " +anoAtual+ " e estou em "+cidade);