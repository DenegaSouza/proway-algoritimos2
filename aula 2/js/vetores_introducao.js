console.log("funcionando");

let nomes=[]

console.log(nomes);


let cursos=[
"Algorítimos 1",
"Algorítimos 2",
"Java fundamentos",
"Fundamentos em HTML5",
"Javascript Avançado",
"MySQL",
"Typescript",
"Fundamentos em css"
]

console.log(cursos);

console.log(cursos[5]); 
//acessar posicao especifica (5). Inicia em (0)

console.log(cursos.indexOf("Fundamentos em HTML5")); 
//indexOf saber posicao do item

cursos.splice(0,1) 
console.log(cursos);
//SPLICE para deletar 1 item na lista. 
//Informar posição do item (0) e qtd de items para deletar a partir da posicao(1).

cursos.push("Python") 
cursos.push("Angular")
// incluir novos itens no fim da lista.
console.log(cursos);


//iniciando contador com 0 pois o indice na lista começa com 0.
//enquantop for menor que o tamanho da lista, ou seja, tamanho -1
//incremento de 1 em 1

for(let contador=0;contador<cursos.length;contador++){
console.log("A posição " +contador+ " tem o valor = " +cursos[contador]);
}

//contador iniciando em 1 pq é mais intuitivo fazer a contagem com 1
//mas tenho que ir ate o tamanho da lista
//incremente de 1 em 1
console.log("-----------------------------------");
for (let contador=1;contador<=cursos.length;contador++) {
    //ajustando o acesso ao valor para localizar o indice correto pois começa 0.
    //se iniciar com 1 pularia o 1o item e acesso a item extra que nao existe.
console.log("A posição " +contador+ " tem o valor = " +cursos[contador-1]);
}
