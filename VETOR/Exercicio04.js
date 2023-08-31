let sair, numDeFuncionarios , salario
const salarios = []

numDeFuncionarios = Number(prompt("Digite o número de funcionário"));

for(let i = 1; i <numDeFuncionarios; i++){
  salario = Number(prompt(`Digite o salário dos funcionários ${i+1}`))
  salarios.push(salario)
}