console.log("criar um vetor de gostos pessoais");
console.log("pode criar o vetor já com valores ou não");
console.log("se nao tiver valores, usar push para incluir item a item");

console.log("exibir a lista toda com log");
console.log("percorrer a lista para apresentar cada valor com 1 frase");

let gostos=[
"Futebol",
"Dormir",
"Bebidas",
"Comidas"
]

gostos.push("Estudar")

console.log(gostos);
for (let contador=1;contador<=gostos.length;contador++)
console.log("O "+contador+"º gosto é: "+gostos[contador-1]);

console.log("O que mais gosto é "+gostos[2]); // pegar apenas a posicao 2.