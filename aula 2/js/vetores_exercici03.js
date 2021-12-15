//criar um vetor vazio para solicitar do usuario frase aleatorios
//reptir esta captura ate que o usuario digite "texto vazio"("")
//e para cada repeticao, escrever em tela a frase aleatoria capturada


let frases = []
let frase

do {
    frase = prompt("Informe uma frase:")
document.write("<br>"+frase)
frases.push(frase)
} while (frase != "")