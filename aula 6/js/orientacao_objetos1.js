console.log("ok");

//Aluno
//atributos = variaveis (5)

//nome string
//idade number
//matricula number
//senha number
//nota number

//metodos = funcoes sem o comando function
//conversa(ouviu) --> return resposta
//responderChamada(professor) --> " professor, MEU_NOME presente
//meApresentar() --> "oi meu nome é NOME, tenho XXX anos, minha matrícula é XXX e nota é XXX"

class Aluno { //padrao para nome de class é iniciar com Maiúscula. Abaixo sao ATRIBUTOS.
    nome
    idade
    matricula
    senha
    nota

    //declaracao do contrutor que será chamado de forma externa
    //para criar um OBJETO da classe Aluno
    constructor(nome, idade, matricula, senha, nota) {
        //passando valores dos parametros para os atributos, diferenciando com THIS.
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
        this.senha = senha
        this.nota = nota
    }

    conversar(ouviu) {
        return ouviu + ", Humm que interessante..."
    }
    chamarProfessor(mensagem){
        return "Já resolveu, era isso ("+mensagem+")"
    }
    meApresentar(){
        return "Olá, meu nome é " +this.nome+ " e tenho " +this.idade+ " anos. Minha matrícula é " +this.matricula+ " e minha nota " +this.nota+". A senha é secreta"
            }

}

let nome = "Everton"
//comando NEW busca o CONSTRUCTOR e cria objetos.
let aluno1 = new Aluno("Everton", 36, "71551", "1234", 7)
let alunoX = new Aluno("Miranha", 20, "miranha3", "tonystark", 10)

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);

console.log(alunoX.senha);

console.log("Olá, meu nome é ", this.nome, " e tenho ", this.idade, " anos. Minha matrícula é ", this.matricula, " e minha nota ", this.nota);

alunoX.nome = "Novo nome"
alunoX.idade = 19
alunoX.matricula = "999"
alunoX.senha = "abc123"
alunoX.nota = 5
console.log(alunoX);

let colega = new Aluno("Bruna", 17, "70653", "xxxx", 9)
console.log(colega);

colega.nota = 10
console.log(colega);

console.log(aluno1.conversar("sobre o filme do miranha"));
document.write(aluno1.conversar("sobre o filme do miranha"))
let resposta = aluno1.conversar("sobre o filme do miranha")

console.log(alunoX.conversar("Nada a declarar"));

//como eu crio um objeto da classe aluno?
//instanciando objeto da classe ALUNO com os atributos.
let aluno10 = new Aluno("Derek", 20, "90909", "eusouderek", 2)

//como eu acesso cada atributo do objeto?
console.log("OLá, meu nome é " + aluno10.nome);
document.writeln("Oi, tenho " + aluno10.idade + "anos")
let variavel = aluno10.matricula

//como eu atualizo o atributor de um objeto?
aluno10.nome = "Joana"
aluno10.idade = 18
aluno10.nota = 8

console.log(aluno10);
console.log(aluno10.conversar("Aprendi orientacao a objetos"));


//executando metodos de um objeto da classr aluno
console.log(aluno10.chamarProfessor("erro na linha 64"));

console.log(aluno1.meApresentar());
console.log(aluno10.meApresentar());