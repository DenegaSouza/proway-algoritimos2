//criar uma classe professor com os atributos
//nome string
//idade number
//qtdAlunos number

//metodos fazerChamada que recebe por parametro o nome do aluno e retorna (presençaverificada)
//calculaMedia recebe 3 notas e devolve a media

// apos criar a classe, instanciar 1 objeto da classe Professor para atribuir valores
//atualizar algum valor de atributo do professor
//utilizar os metodos do professor

class Professor {
    nome
    idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos) {
        this.nome = nome
        this.idade = idade
        this.qtdAlunos = qtdAlunos
    }

    fazerChamada(nomeAluno) {
        return "Presença verificada do aluno " +nomeAluno+"."
    }

    calcularMedia(nota1,nota2,nota3) {
               return (nota1+nota2+nota3)/3
    }
    
}


let professor1 = new Professor("Rubem", 32, 12)
console.log(professor1);

professor1.qtdAlunos = 20
console.log(professor1);
console.log(professor1.fazerChamada("Everton"));
console.log(professor1.calcularMedia(10,8,6));

let media = professor1.calcularMedia(10,8,5)

//instanciem outro professor e utilizam seus atributos e metodos

let professor2 = new Professor("Oliota",36,17)
console.log(professor2);
professor2.qtdAlunos=8
console.log(professor2);

console.log(professor2.fazerChamada("Aluno X"));
console.log(professor2.calcularMedia(6,8,7));

console.log(professor2.fazerChamada("Aluno 3"));
console.log(professor2.calcularMedia(10,4,5));

