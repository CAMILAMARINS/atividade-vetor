let notas = [], nomes = [], media = 0, soma = 0 

for (i = 0; i < 5; i++) {

 nomes[i] = prompt("Digite os nomes do aluno: ")
 notas[i] = Number(prompt("Digite as notas dos alunos: "))
 soma += notas[i]
}
    media = soma / 5

for (i = 0; i < 5; i++) {

    if (notas[i] > media) {
        console.log(`O aluno ${nomes[i]} esta acima da media`)
    } 
        else {
            console.log(`O aluno ${nomes[i]} esta abaixo da media`)
        }

}
