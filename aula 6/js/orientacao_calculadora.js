class Calculadora {
    numeroA
    numeroB


    constructor(numeroA, numeroB) {
        this.numeroA = numeroA
        this.numeroB = numeroB

    }

    capturarNumeros(nA, nB, operacao) {
        this.numeroA = nA
        this.numeroB = nB
        this.operacao = operacao

        switch (operacao) {
            case "somar":
               return this.somar()
                break;
            case "subtrair":
               return this.subtrair()
                break;
            case "multiplicar":
              return  this.multiplicar()
                break;
            case "dividir":
               return this.dividir()
                break;

        }

    }

    somar() {
        return this.numeroA + this.numeroB
    }

    subtrair() {
        return this.numeroA - this.numeroB
    }

    dividir(numeroA, numeroB) {
        return this.numeroA / this.numeroB
    }

    multiplicar(numeroA, numeroB) {
        return this.numeroA * this.numeroB
    }
}

let calculadora = new Calculadora(1, 2)
console.log("A soma é " + calculadora.somar());
console.log("A subtração é " + calculadora.subtrair());

console.log("A operação de soma é "+ calculadora.capturarNumeros(5,3,"somar"));
console.log("A operação de subtracão é "+ calculadora.capturarNumeros(5,3,"subtrair"));
console.log("A operação de multiplicação é "+ calculadora.capturarNumeros(5,3,"multiplicar"));
console.log("A operação de divisão é "+ calculadora.capturarNumeros(5,3,"dividir"));
