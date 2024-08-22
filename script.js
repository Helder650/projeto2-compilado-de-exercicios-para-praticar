// 1.Faça um Programa que mostre a mensagem "Olá mundo" na tela.
let mensagem = prompt("Digite algo")
alert(`mensagem`)    

// 2.Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
let number = prompt("Digite um número")
alert(`O número informado foi ${number}`)

// 3.Faça um Programa que peça dois números e imprima a soma.
let number1 = parseInt(prompt("Digite um número"))
let number2 = parseInt(prompt("Digite outro número"))
let soma = number1 + number2
alert(`O resultado é ${soma}`)

// 4.Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let notas1 = parseInt(prompt("Qual sua nota do primeiro bimestre?"))
let notas2 = parseInt(prompt("Qual sua nota do segundo bimestre?"))
let notas3 = parseInt(prompt("Qual sua nota do terceiro bimestre?"))
let notas4 = parseInt(prompt("Qual sua nota do quarto bimestre?"))

let media = (notas1 + notas2 + notas3 + notas4) / 4
alert(`Sua media é ${media}`)

// 5.Faça um Programa que converta metros para centímetros.
let metros = prompt("Digite o valor em metros.")
let centimetros = metros * 100
alert(`${metros} metros é igual a ${centimetros} centímetros.`)

// 6.Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
let raio = prompt("Digite o raio do círculo?")
let area = 3.14 * raio * raio
alert(`A área do círculo é ${area}`)

// 7.Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let lado = prompt("Digite o comprimento do lado do quadrado:")
let area2 = lado * lado
let dobroArea = 2 * area2
alert(`A area do quadrado é ${area2} é o dobro é ${dobroArea}`)

// 8.Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let hora = parseInt(prompt("Quanto você ganha por hora?"))
let trabalho = parseInt(prompt("Quantas horas você trabalha no mes?"))
let salario = hora * trabalho
alert(`Seu salario mensal é ${salario}`)

// 9.Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
let fahrenheit = parseInt(prompt("Digite a temperatura em Fahrenheit"))             
let celsius = 5 * ((fahrenheit - 32) / 9);
alert(`A temperatura em Celsius é ${celsius}`)

// 10.Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

let celsius2 = parseInt(prompt("Digite a temperatura em Celsius"))
let fahrenheit2 = (celsius2 * 9/5) + 32
alert(`A temperatura em fahrenheit é ${fahrenheit2}`)

// 11.Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.
let num1 = parseInt(prompt("Digite um número inteiro."))
let num2 = parseInt(prompt("Digite outro número inteiro."))
let num3 = parseFloat(prompt("Digite um número real."))
let produto = (num1 * 2) * (num2 / 2 ) 
let soma2 = (num1 * 3 ) + num3
let cubo = num3 * 3 
alert(`O produto do dobro do primeiro com metade do segundo é: ${produto}`)
alert(`A soma do triplo do primeiro com o terceiro é: ${soma2}`)
alert(`O terceiro número elevado ao cubo é: ${cubo}`)

// 12.Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = parseFloat(prompt("Digite sua altura"))
let peso = (72.7 * altura) - 58
alert(`O seu peso ideal é ${peso}kg.`)

// 13.Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7
let altura1 = parseFloat(prompt("Digite sua altura"))
let homem = (72.7 * altura1) - 58
let mulher = (62.1 * altura1) - 44.7
alert(`Peso ideal para homens é ${homem} kg / Peso ideal para mulheres: ${mulher} kg`)

// 14.João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
let peso1 = parseInt(prompt('Digite o peso de peixes pescados:'))
let limite = peso1 - 50
let multa = limite * 4
alert(`O valor da multa é de ${multa}`)

// 15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// salário bruto.
// quanto pagou ao INSS.
// quando pagou para o sindicato.
// o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
// Salário Bruto : R$
// INSS (8%) : R$
// Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.
let hora1 = parseFloat(prompt("Digite quanto você ganha por hora"))
let hora2 = parseFloat(prompt("Quantas horas você trabalhou no mes?"))
let bruto = hora1 * hora2
let inss = bruto * 0.08
let sindicato = bruto * 0.05
let Liquido = bruto - inss - sindicato
alert(`Seu salario bruto é ${bruto}R$`)
alert(`O valor pago ao INSS é ${inss}R$`)
alert(`O valor pago ao sindicato é ${sindicato}R$`)
alert(`Seu salario liquido é ${Liquido}R$`)