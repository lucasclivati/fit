const divCafe = document.querySelector("#apareceCafe");
const alimento = document.querySelector("#alimento");
const quantidade = document.querySelector("#quantidade");
let refeicaoSelecionada = refeicao.children[refeicao.selectedIndex];
const inserir = document.querySelector("#inserirRefeicao");
const divCafeP = document.querySelector("#divCafeP");
const divLancheDaM = document.querySelector("#apareceLancheDaM");
const divAlmoco = document.querySelector("#apareceAlmoco");
const divLancheDaT = document.querySelector("#apareceLancheDaT");
const divJanta = document.querySelector("#apareceJanta");
const divCeia = document.querySelector("#apareceCeia");
const divPreT = document.querySelector("#aparecePreT");
const divPosT = document.querySelector("#aparecePosT");
const divLancheDaMP = document.querySelector("#divLancheDaMP");
const divAlmocoP = document.querySelector("#divAlmocoP");
const divLancheDaTP = document.querySelector("#divLancheDaTP");
const divJantaP = document.querySelector("#divJantaP");
const divCeiaP = document.querySelector("#divCeiaP");
const divPreTP = document.querySelector("#divPreTP");
const divPosTP = document.querySelector("#divPosTP");


let cafeDaManha = {
    alimento: [],
    quantidade: [],
    observacoes:[]
}
let lancheDaManha = {
    alimento: [],
    quantidade: [],
    observacoes:[]
}
let almoco = {
    alimento:[],
    quantidade: [],
    observacoes:[]
}
let lancheDaTarde = {
    alimento:[],
    quantidade: [],
    observacoes:[]
}
let jantar = {
    alimento:[],
    quantidade: [],
    observacoes:[]
}
let ceia = {
    alimento:[],
    quantidade: [],
    observacoes:[]
}
let preTreino = {
    alimento:[],
    quantidade: [],
    observacoes:[]
}
let posTreino = {
    alimento:[],
    quantidade: [],
    observacoes:[]
}
inserir.addEventListener("click", addAlinementoEQtdade, mostraDiv);



function addAlinementoEQtdade (){
    refeicaoSelecionada = refeicao.children[refeicao.selectedIndex];
    const observacoesU = document.querySelector("#observacoesU").value;
    switch (refeicaoSelecionada.value) {
        case "cafeDaManha":
            cafeDaManha.alimento.push(alimento.value);
            cafeDaManha.quantidade.push(parseInt(quantidade.value)+"g");
            cafeDaManha.observacoes.push(observacoesU);
        break;
        case "lancheDaManha":
            lancheDaManha.alimento.push(alimento.value);
            lancheDaManha.quantidade.push(parseInt(quantidade.value));
            lancheDaManha.observacoes.push(observacoesU);
        break;
        case "almoco":
            almoco.alimento.push(alimento.value);
            almoco.quantidade.push(parseInt(quantidade.value));
            almoco.observacoes.push(observacoesU);
        break;
        case "lancheDaTarde":
            lancheDaTarde.alimento.push(alimento.value);
            lancheDaTarde.quantidade.push(parseInt(quantidade.value));
            lancheDaTarde.observacoes.push(observacoesU);
        break;
        case "jantar":
            jantar.alimento.push(alimento.value);
            jantar.quantidade.push(parseInt(quantidade.value));
            jantar.observacoes.push(observacoesU);
        break;
        case "ceia":
            ceia.alimento.push(alimento.value);
            ceia.quantidade.push(parseInt(quantidade.value));
            ceia.observacoes.push(observacoesU);
        break;
        case "preTreino":
            preTreino.alimento.push(alimento.value);
            preTreino.quantidade.push(parseInt(quantidade.value));
            preTreino.observacoes.push(observacoesU);
        break;
        case "posTreino":
            posTreino.alimento.push(alimento.value);
            posTreino.quantidade.push(parseInt(quantidade.value));
            posTreino.observacoes.push(observacoesU);
        break;
        default:
            break;
    }
    mostraDiv();
}
function mostraDiv (){
    switch (refeicaoSelecionada.value) {
        case "cafeDaManha":
            divCafe.removeAttribute("style");
            divCafe.style += "max-width: 18rem; display: flex";
            divCafe.style.display= "block";
            divCafeP.textContent = " ";
            for(i=0; i < cafeDaManha.alimento.length; i++){
            divCafeP.textContent += cafeDaManha.alimento[i] + " " + cafeDaManha.quantidade[i] + "(" + cafeDaManha.observacoes[i] + ")" +" ; ";}
        break;
        case "lancheDaManha":
            divLancheDaM.removeAttribute("style");
            divLancheDaM.style += "max-width: 18rem; display: flex";
            divLancheDaM.style.display= "block";
            divLancheDaMP.textContent = " ";
            for(i=0; i < lancheDaManha.alimento.length; i++){
            divLancheDaMP.textContent += lancheDaManha.alimento[i] + " " + lancheDaManha.quantidade[i]+ "(" + lancheDaManha.observacoes[i] + ")" +" ; ";}
        break;
        case "almoco":
            divAlmoco.removeAttribute("style");
            divAlmoco.style += "max-width: 18rem; display: flex";
            divAlmoco.style.display= "block";
            divAlmocoP.textContent = " ";
            for(i=0; i < almoco.alimento.length; i++){
            divAlmocoP.textContent += almoco.alimento[i] + " " + almoco.quantidade[i]+ "(" + almoco.observacoes[i] + ")" +" ; ";}
        break;
        case "lancheDaTarde":
            divLancheDaT.removeAttribute("style");
            divLancheDaT.style += "max-width: 18rem; display: flex";
            divLancheDaT.style.display= "block";
            divLancheDaTP.textContent = " ";
            for(i=0; i < lancheDaTarde.alimento.length; i++){
            divLancheDaTP.textContent += lancheDaTarde.alimento[i] + " " + lancheDaTarde.quantidade[i]+ "(" + lancheDaTarde.observacoes[i] + ")" +" ; ";}
        break;
        case "jantar":
            divJanta.removeAttribute("style");
            divJanta.style += "max-width: 18rem; display: flex";
            divJanta.style.display= "block";
            divJantaP.textContent = " ";
        for(i=0; i < jantar.alimento.length; i++){
            divJantaP.textContent += jantar.alimento[i] + " " + jantar.quantidade[i]+ "(" + jantar.observacoes[i] + ")" +" ; ";}
        break;
        case "ceia":
            divCeia.removeAttribute("style");
            divCeia.style += "max-width: 18rem; display: flex";
            divCeia.style.display= "block";
            divCeiaP.textContent = " ";
            for(i=0; i < ceia.alimento.length; i++){
            divCeiaP.textContent += ceia.alimento[i] + " " + ceia.quantidade[i]+ "(" + ceia.observacoes[i] + ")" +" ; ";}
        break;
        case "preTreino":
            divPreT.removeAttribute("style");
            divPreT.style += "max-width: 18rem; display: flex";
            divPreT.style.display= "block";
            divPreTP.textContent = " ";
            for(i=0; i < preTreino.alimento.length; i++){
            divPreTP.textContent += preTreino.alimento[i] + " " + preTreino.quantidade[i]+ "(" + preTreino.observacoes[i] + ")" +" ; ";}
        break;
        case "posTreino":
            divPosT.removeAttribute("style");
            divPosT.style += "max-width: 18rem; display: flex";
            divPosT.style.display= "block";
            divPosTP.textContent = " ";
            for(i=0; i < posTreino.alimento.length; i++){
            divPosTP.textContent += posTreino.alimento[i] + " " + posTreino.quantidade[i]+ "(" + posTreino.observacoes[i] + ")" +" ; ";}
        break;
        default:
            break;
    }
}