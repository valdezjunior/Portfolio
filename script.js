let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

/* OBS: MANEIRA MAIS SIMPLIFICADA

document.querySelector(".hamburguer");.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu");
);

*/

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
/*Sempre que acontecer um evento change( Houver alguma alteração, não só o click) nessa caixa de texto (qtde) o navegador atualiza o preço */
document.querySelector("#js").addEventListener("change", atualizarPreco)
/*Sempre que um elemento do js for alterado ele executa o método atualizar preço */
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    


    let preco = qtde * 100;
    if (temJS) preco = preco + ((preco * 10) / 100)
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1/*100%*/ - prazo*0.1; /* menos a porcentagem que tiver no prazo*10% */
    /*
    0.1 = 10%
    prazo = semanas
    1 = 100%
    
    10% * 7semanas = 70% dos 100% das semanas que sao 10

    70% pra chegar em 100% são 30%, ou seja 30% do valor será acrescentado.
    */

    preco *= 1 + taxaUrgencia
    /* 
                    TEMJS
    OBS ===================================   
                    TEMJS
    
    Acima é uma maneira de fazer (a mais longa)

    Também tem a maneira simplificada

    if (temJS) preco *= 1.1 

    O primeiro 1 equivale ao preco 100% do preco ou seja, o valor que já tinha. O segundo .1 é os 10% que vem depois então não precisa somar o valor com os 10% pois a própria multiplicação já da o valor mais os 10%, e sendo assim ainda pode tirar as chaves pois o conteudo tem apenas uma linha.

    Usando esse método vai ter que alterar as casas decimais na interpolação abaixo, ex: 
    `R$ ${preco.toFixed(2)}`
    */

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
    
}