const refeicao = document.querySelector("#refeicao");
const alimento = document.querySelector("#alimento");
const quantidade = document.querySelector("#quantidade");
const inserir = document.querySelector("#inserirRefeicao");
const itemDieta = document.querySelector("#itemDieta");
const bomba = document.querySelector("#bomba");
let novoCard;
let divDoNovoCard;
let tituloRefeicao = refeicao.value;
let novaRefeicao;  
let novoAlimento; 
let refeicaoSelecionada = refeicao.children[refeicao.selectedIndex];
let cafeDaManha = {
    id: new Date(),
    alimentoDigitado: [alimento.value],
    quantidadeDigitada: [quantidade.value]
};
let lancheDaManha = {
    id: new Date(),
    alimentoDigitado: [alimento.value],
    quantidadeDigitada: [quantidade.value]
};
let almoco = {
    id: new Date(),
    alimentoDigitado: [alimento.value],
    quantidadeDigitada: [quantidade.value]
};

inserir.addEventListener("click", ()=>{
    if(alimento.value != null && quantidade.value > 0){
        escreveHtml();
    } else {
        alert(`Você deve inserir um alimento e sua quantidade!`)
    }
});

function escreveHtml (){
    criaDivCard();
    criaDivCardBody();
    refeicaoSelecionada = refeicao.children[refeicao.selectedIndex];
    insereTituloCard();
    adicionaAlimento();
    
}

//Criar novo card
function criaDivCard (){
    bomba.removeAttribute("style");
    novoCard = document.createElement("div");
    itemDieta.appendChild(novoCard);
    novoCard.className +="card border-secondary mb-3 d-flex-column";
    novoCard.style += "max-width: 18rem;";
}

function criaDivCardBody (){
    divDoNovoCard = document.createElement("div");
    novoCard.appendChild(divDoNovoCard);
    divDoNovoCard.className +="card-body text-secondary";
}

function insereTituloCard() {
    novaRefeicao = document.createElement("h5");
    divDoNovoCard.appendChild(novaRefeicao);
    novaRefeicao.className +="card-title";
    switch (refeicaoSelecionada.value) {
        case "cafeDaManha":
            novaRefeicao.textContent = "Café da Manhã"
            
            break;
        case "almoco":
            novaRefeicao.textContent = "Almoço"
            console.log("olá")
            break;
        default:
            break;
    }
}

function adicionaAlimento(){
    novoAlimento = document.createElement("p");
    divDoNovoCard.appendChild(novoAlimento);
    novoAlimento.className += "card-text"
    novoAlimento.textContent += alimento.value +" " + quantidade.value + "g ; ";
   
}

