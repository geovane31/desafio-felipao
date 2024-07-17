//Variaveis para nome do Héroi e quantidade de experiencia
let NomeDoHeroi = "Batman"
let XpDoHeroi = 9999
//Variavel para armazenar o nivel do héroi na condição
let nivel
//Constante para completar frase final
const oHeroi = "O Herói de nome "
const estaNivel = " está no nível "

//Estrutura para decisão conformer a quantidade de experiência do heroi
if (XpDoHeroi <= 1000){
    nivel = "Ferro"
}
else if (XpDoHeroi >= 1001 && XpDoHeroi <=2000){
    nivel = "Bronze"
}
else if (XpDoHeroi >= 2001 && XpDoHeroi <=5000){
    nivel = "Prata"
}
else if (XpDoHeroi >= 5001 && XpDoHeroi <=7000){
    nivel = "Ouro"
}
else if (XpDoHeroi >= 7001 && XpDoHeroi <=8000){
    nivel = "Platina"
}
else if (XpDoHeroi >= 8001 && XpDoHeroi <=9000){
    nivel = "Ascendente"
}
else if (XpDoHeroi >= 9001 && XpDoHeroi <=10000){
    nivel = "Imortal"
}
else if (XpDoHeroi >= 10001){
    nivel = "Radiante"
}
//Mensagem final com nome e nivel do heroi de acordo com a condição
console.log(oHeroi + NomeDoHeroi + estaNivel + nivel)