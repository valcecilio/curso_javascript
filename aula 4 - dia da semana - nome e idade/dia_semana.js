let diaSemana, dia;
diaSemana = prompt("Escolha o dia da semana: \n1-Domingo\n2-Segunda\n3-Terça\n4-Quarta\n5-Quinta\n6-Sexta\n7-Saábado");
//if(diaSemna =="1")
switch (diaSemana){
    case"1":
        dia = "Domingo";
        break;
    case"2":
        dia = "Segunda";
        break;
    case"3":
        dia = "Terça";
        break;
    case"4":
        dia = "Quarta";
        break;
    case"5":
        dia = "Quinta";
        break;
    case"6":
        dia = "Sexta";
        break;
    case"7":
        dia = "Sábado";
        break;
    default:
        dia = "<br>Resposta inválida";
        break;
}
document.write("Dia da semana escolhido foi " + dia);

//let nome, idade;

//nome = prompt("Informe seu nome: ");
//idade = prompt("Informe seu idade: ");

//if(idade >= 18){
//    resposta = "maior";
//}else{
//    resposta = "menor";
//}

//TERNÁRIO - Só funciona se o if for uma linha só

//resposta = (idade>=18) ? "Maior" : "Menor";


//document.write("<br><br>Olá " + nome + ", você é " + resposta + " de idade.");

//let contador = 1;
//while(contador <= 3){
 //   document.write("<br> Número " + contador);
 //   contador = contador - 1;
 let repetir = "sim";

 while(repetir == "sim"){
    nome = prompt("Informe seu nome: ");
    idade = prompt("Informe seu idade: ");
    resposta = (idade>=18) ? "Maior" : "Menor";    
    document.write("<br><br>Olá " + nome + ", você é " + resposta + " de idade.");
 

 repetir = prompt("Deseja repetir? sin ou não?");
 }







