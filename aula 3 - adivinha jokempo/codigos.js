let nome, idade;

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");
email = prompt("Qual a sua E-mail?");
//if - estrutura de decisão
if (idade >= 18){
    document.write("Seu nome é:<strong> "+ nome + "</strong>");
    document.write("<br>Sua idade é:<strong> "+ idade + "</em>");
    document.write("<br>Seu E-mail é:<strong> "+ email + "</em>");
}else if(idade<7){
    document.write("<strong>Sai daqui!!!</strong>")
}else{
    document.write("<strong> Voce precisa de um responsável.</strong>")
};
//else - comando else é o último