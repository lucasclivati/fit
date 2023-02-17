const refeicao = document.querySelector("#refeicao");
let refeicaoSelecionada = refeicao.children[refeicao.selectedIndex];
const alimento = document.querySelector("#alimento");
const quantidade = document.querySelector("#quantidade");
const inserir = document.querySelector("#inserirRefeicao");
const itemDieta = document.querySelector("#itemDieta");
const novoCard = document.createElement("div");
let tituloRefeicao = refeicao.value;
const novaRefeicao = document.createElement("h4");
const novoAlimento = document.createElement("p");


inserir.addEventListener("click", escreveHtml);

function escreveHtml (){
    itemDieta.appendChild(novoCard);
    novoCard.appendChild(novaRefeicao);
    novaRefeicao.textContent = refeicaoSelecionada.textContent;
    adicionaAlilmento();
}

function adicionaAlilmento(){
    novoCard.appendChild(novoAlimento);
    novoAlimento.textContent = alimento.value +" " + quantidade.value + "g";
}