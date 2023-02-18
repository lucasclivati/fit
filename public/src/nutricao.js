const refeicao = document.querySelector("#refeicao");
let refeicaoSelecionada = refeicao.children[refeicao.selectedIndex];
const alimento = document.querySelector("#alimento");
const quantidade = document.querySelector("#quantidade");
const inserir = document.querySelector("#inserirRefeicao");
const itemDieta = document.querySelector("#itemDieta");
const novoCard = document.createElement("div");
const divDoNovoCard = document.createElement("div");
let tituloRefeicao = refeicao.value;
const novaRefeicao = document.createElement("h5");
const novoAlimento = document.createElement("p");


inserir.addEventListener("click", escreveHtml);

function escreveHtml (){
    criaDivCard();
    criaDivCardBody();
    adicionaAlilmento();
    insereTituloCard();
    adicionaAlilmento();
}
function criaDivCard (){
    itemDieta.appendChild(novoCard);
    novoCard.className +="card border-secondary mb-3";
    novoCard.style += "max-width: 18rem;";
}

function criaDivCardBody (){
    novoCard.appendChild(divDoNovoCard);
    divDoNovoCard.className +="card-body text-secondary";
}

function insereTituloCard() {
    divDoNovoCard.appendChild(novaRefeicao);
    novaRefeicao.className +="card-title";
    novaRefeicao.textContent = refeicaoSelecionada.textContent;
}

function adicionaAlilmento(){
    divDoNovoCard.appendChild(novoAlimento);
    novoAlimento.className += "card-text"
    novoAlimento.textContent = alimento.value +" " + parseInt(quantidade.value) + "g";
}


/*<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/