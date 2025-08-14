let titulo = document.querySelector('h1')
titulo.innerHTML = "Exibindo Testes Javascript";


let click = 0;

function exibirConsole(){
    console.log('O botao foi clicado');
    if (click++ > 5){
        console.log('Chega de clicar, eu já entendi!!');
    }

    if(click > 10){
        console.log('Ta maluco cara??? Para de clicar nisso aí!!!');

    }
}

function exibirAlerta(){
    alert('Eu amo JS!');
}

function campoTexto(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function operacaoAritmetica(){
    alert('Vamos fazer uma soma!');
    let primeiro_numero = prompt('Digite um numero inteiro');
    let segundo_numero = prompt('Digite outro numero inteiro');
    let primeiroint = parseInt(primeiro_numero);
    let segundoint = parseInt(segundo_numero);
    alert(`O resultado da soma foi = ${primeiroint + segundoint}`);
}