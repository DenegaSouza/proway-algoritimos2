



function capturarNumeros(acao) {

    let nA = promptNumero("Informe o 1º número")
    let nB = promptNumero("Informe o 2º número")

    //escolher em switch as operacoes
    switch (acao) {
        case "somar":
            somar(nA, nB)
            break
        case "subtrair":
            subtrair(nA, nB)
                        break
        case "multiplicar":
            multiplicar(nA, nB)
            break
        case "dividir":
            dividir(nA, nB)
            break
        default:
            console.log("Fazer nada pois não tem opcao certa");
            break
    }

}

function promptNumero(frase) {
    let temporario = Number(prompt(frase))
    return temporario
}

function somar(numeroA, numeroB) {
    alert(numeroA + numeroB)
}

function subtrair(numeroA, numeroB) {
    alert(numeroA - numeroB)
}

function multiplicar(numeroA, numeroB) {
    alert(numeroA * numeroB)
}
function dividir(numeroA, numeroB) {
    alert(numeroA / numeroB)
}

// parenteses = parametro
// escopo