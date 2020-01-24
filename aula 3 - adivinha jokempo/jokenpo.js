/* JO KEN PO */
let nomeJogador1, nomeJogador2;
let opcaoJogador1, opcaoJogador2;

nomeJogador1 = prompt("Informe o nome do jogador 1: ");
opcaoJogador1 = prompt("Olá " + nomeJogador1 + ", escolha uma das opções: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura");

nomeJogador2 = prompt("Informe o nome do jogador 2: ");
opcaoJogador2 = prompt("Olá " + nomeJogador2 + ", escolha uma das opções: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura");


if(opcaoJogador1 == opcaoJogador2){
    document.write("Empate");
}else if(opcaoJogador1 == 1 && opcaoJogador2 == 3){
    document.write(nomeJogador1 + " VENCEU! <br> ");
}else if(opcaoJogador1 == 2 && opcaoJogador2 == 1){
    document.write(nomeJogador1 + " VENCEU! <br> ");
}else if(opcaoJogador1 == 3 && opcaoJogador2 == 2){
    document.write(nomeJogador1 + " VENCEU! <br> ");
}


else if(opcaoJogador2 == 1 && opcaoJogador1 == 3){
    document.write(nomeJogador1 + " VENCEU!");
}else if(opcaoJogador2 == 2 && opcaoJogador1 == 1){
    document.write(nomeJogador1 + " VENCEU!");
}else if(opcaoJogador2 == 3 && opcaoJogador1 == 2){
    document.write(nomeJogador2 + " VENCEU!");
}


