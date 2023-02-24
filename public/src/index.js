let exerciciosOmbro = [
    {
        "nome": "Elevação Lateral",
        "ultimoPeso": 7,
        "dataUltimoExec": "01/02/2023",
        "pesoAtual": 0,
        "dataRealizado": null,
        "unidadePeso": "kg",
        "idTrigger": "ambos",
        "executado": false
    },
    {
        "nome": "Elevação Frontal",
        "ultimoPeso": 8,
        "dataUltimoExec": "01/02/2023",
        "pesoAtual": 0,
        "dataRealizado": null,
        "unidadePeso": "kg",
        "idTrigger": "elevacaoFrontal",
        "executado": false
    },
    {
        "nome": "Elevação Unilateral",
        "ultimoPeso": 6,
        "dataUltimoExec": "01/02/2023",
        "pesoAtual": 0,
        "dataRealizado": null,
        "unidadePeso": "kg",
        "idTrigger": "unilateral",
        "executado": false
    }
];



//criando dinamicamente divs com base em array

// Pegar a referencia de onde fazer o display do html
var accordionJs = document.getElementById("accordionJs");

 for (var i = 0; i < exerciciosOmbro.length; i++) {
    // Criar uma nova div para cada i
    // Verifica se é a primeira, no meio ou o último accordion, cada um é formatado de um jeito.
    if (i === 0){
        let text = 
        '<div class="accordion-item">'
            +'<h2 class="accordion-header" id="heading' + i + '">'
            +'<button id="'+ exerciciosOmbro[i].idTrigger +'" class="accordion-button collapsed accordionExercicio" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '">'
                +'<div>'
                    +'<div>'
                    +'<h5 class="gradientFont fw-bold"><span>' + Number(i+1) + '</span>. '+exerciciosOmbro[i].nome+'</h5>'
                    +'</div>'
                        +'<div>'
                        +exerciciosOmbro[i].ultimoPeso+'kg em '+exerciciosOmbro[i].dataUltimoExec
                        +'</div>'
                    +'</div>'
                    +'</button>'
                    +'</h2>'
                    +'<div id="collapse'+i+'" class="accordion-collapse collapse show" aria-labelledby="heading'+i+'"'
                    + 'data-bs-parent="#accordionJs">'
                    +'<div class="accordion-body">'
                    +'  <div class="input-group mb-3">'
                    +'    <input type="number" placeholder="Carga atual (kg)" class="form-control" aria-label="" data-novo-peso>'
                    +'    <button class="btn btn-primary" type="button" data-salvar-carga>'
                    +'      Salvar <span class="d-none d-md-inline-block">Carga</span>'
                    +'    </button>'
                    +'    <div class="dropdown-menu-end">'
                    +'      <button type="button" class="btn btn-dark dropdown-toggle rounded-start-0" data-bs-toggle="dropdown"'
                    +'        aria-expanded="false">'
                    +'        Ações'
                    +'                  </button>'
                    +'      <ul class="dropdown-menu" data-bs-theme="dark">'
                    +'        <li><a class="dropdown-item text-white">Histórico Cargas</a></li>'
                    +'        <li><a class="dropdown-item text-warning">Deixar pro fim</a></li>'
                    +'        <li>'
                    +'          <hr class="dropdown-divider">'
                    +'        </li>'
                    +'        <li><a class="dropdown-item text-danger" data-matar-treino="">Matar Exercício</a></li>'
                    +'      </ul>'
                    +'    </div>'
                    +'  </div>'
                    +'</div>'
                +'  </div>'
            +'</div>';
        let newDiv = document.createElement("div");
        newDiv.innerHTML = text;
        accordionJs.appendChild(newDiv);
     } else if (i < exerciciosOmbro.length-1){
        let text = 
        '<div class="accordion-item">'
        +'<h2 class="accordion-header" id="heading' + i + '">'
        +'<button id="'+ exerciciosOmbro[i].idTrigger +'" class="accordion-button collapsed accordionExercicio" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '">'
            +'<div>'
                +'<div>'
                +'<h5 class="gradientFont fw-bold"><span>' + Number(i+1) + '</span>. '+exerciciosOmbro[i].nome+'</h5>'
                +'</div>'
                    +'<div>'
                    +exerciciosOmbro[i].ultimoPeso+'kg em '+exerciciosOmbro[i].dataUltimoExec
                    +'</div>'
                +'</div>'
                +'</button>'
                +'</h2>'
                +'<div id="collapse'+i+'" class="accordion-collapse collapse rounded-0" aria-labelledby="heading'+i+'"'
                + 'data-bs-parent="#accordionJs">'
                +'<div class="accordion-body">'
                +'  <div class="input-group mb-3">'
                +'    <input type="number" placeholder="Carga atual (kg)" class="form-control" aria-label="" data-novo-peso>'
                +'    <button class="btn btn-primary" type="button" data-salvar-carga>'
                +'      Salvar <span class="d-none d-md-inline-block">Carga</span>'
                +'    </button>'
                +'    <div class="dropdown-menu-end">'
                +'      <button type="button" class="btn btn-dark dropdown-toggle rounded-start-0" data-bs-toggle="dropdown"'
                +'        aria-expanded="false">'
                +'        Ações'
                +'                  </button>'
                +'      <ul class="dropdown-menu" data-bs-theme="dark">'
                +'        <li><a class="dropdown-item text-white">Histórico Cargas</a></li>'
                +'        <li><a class="dropdown-item text-warning">Deixar pro fim</a></li>'
                +'        <li>'
                +'          <hr class="dropdown-divider">'
                +'        </li>'
                +'        <li><a class="dropdown-item text-danger" data-matar-treino="">Matar Exercício</a></li>'
                +'      </ul>'
                +'    </div>'
                +'  </div>'
                +'</div>'
            +'  </div>'
        +'</div>';
        let newDiv = document.createElement("div");
    newDiv.innerHTML = text;
    accordionJs.appendChild(newDiv);
    } else {
        let text = 
        '<div class="accordion-item">'
            +'<h2 class="accordion-header" id="heading' + i + '">'
                +'<button id="'+ exerciciosOmbro[i].idTrigger +'" class="accordion-button collapsed accordionExercicio" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '">'
                     +'<div>'
                        +'<div>'
                             +'<h5 class="gradientFont fw-bold"><span>' + Number(i+1) + '</span>. '+exerciciosOmbro[i].nome+'</h5>'
                        +'</div>'
                         +'<div>'
                              +exerciciosOmbro[i].ultimoPeso+'kg em '+exerciciosOmbro[i].dataUltimoExec
                         +'</div>'
                    +'</div>'
                +'</button>'
            +'</h2>'
                +'<div id="collapse'+i+'" class="accordion-collapse collapse rounded-0" aria-labelledby="heading'+i+'"'
                + 'data-bs-parent="#accordionJs">'
                +'<div class="accordion-body">'
                +'  <div class="input-group mb-3">'
                +'    <input type="number" placeholder="Carga atual (kg)" class="form-control" aria-label="" data-novo-peso>'
                +'    <button class="btn btn-primary" type="button" data-salvar-carga>'
                +'      Salvar <span class="d-none d-md-inline-block">Carga</span>'
                +'    </button>'
                +'    <div class="dropdown-menu-end">'
                +'      <button type="button" class="btn btn-dark dropdown-toggle rounded-start-0" data-bs-toggle="dropdown"'
                +'        aria-expanded="false">'
                +'        Ações'
                +'                  </button>'
                +'      <ul class="dropdown-menu" data-bs-theme="dark">'
                +'        <li><a class="dropdown-item text-white">Histórico Cargas</a></li>'
                +'        <li><a class="dropdown-item text-warning">Deixar pro fim</a></li>'
                +'        <li>'
                +'          <hr class="dropdown-divider">'
                +'        </li>'
                +'        <li><a class="dropdown-item text-danger" data-matar-treino="">Matar Exercício</a></li>'
                +'      </ul>'
                +'    </div>'
                +'  </div>'
                +'</div>'
            +'  </div>'
        +'</div>';

        let newDiv = document.createElement("div");
    newDiv.innerHTML = text;
    accordionJs.appendChild(newDiv);
    }
}

listaExercicios = document.querySelectorAll('.accordion-item');
botoesSalvarCarga = document.querySelectorAll('[data-salvar-carga]');
botoesMatarTreino = document.querySelectorAll('[data-matar-treino]');
botoesAcordionTreino = document.querySelectorAll('.accordionExercicio');
novoPeso = document.querySelectorAll('[data-novo-peso]');


var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var dataAtual = [day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds];


//Salvar carga = Atualiza o array do peso, marca o exercicio como executado, adiciona borda verde no accordion, abre o próximo accordion e dá focus na carga do próximo exercício
//O último ele não abre o próximo exercício, apenas fecha o accordion do último, instigando a salvar o treino inteiro


function salvarCarga(){
    for (let i = 0; i < exerciciosOmbro.length; i++){
        if(i  < exerciciosOmbro.length-1){
            botoesSalvarCarga[i].addEventListener("click", () => {
                exerciciosOmbro[i].pesoAtual = novoPeso[i].value;
                exerciciosOmbro[i].executado = true;
                exerciciosOmbro[i].dataRealizado = dataAtual;
                listaExercicios[i].classList.add('border');
                listaExercicios[i].classList.add('border-success');
                botoesAcordionTreino[i+1].click();
                novoPeso[i+1].focus();
                });
            novoPeso[i].addEventListener("keyup", (event) => {
                    if(event.keyCode === 13){
                        exerciciosOmbro[i].pesoAtual = novoPeso[i].value;
                        exerciciosOmbro[i].executado = true;
                        exerciciosOmbro[i].dataRealizado = dataAtual;
                        listaExercicios[i].classList.add('border');
                        listaExercicios[i].classList.add('border-success');
                        botoesAcordionTreino[i+1].click();
                        novoPeso[i+1].focus(); 
                    }
                });
        } else {
            botoesSalvarCarga[i].addEventListener("click", () => {
                exerciciosOmbro[i].pesoAtual = novoPeso[i].value;
                exerciciosOmbro[i].executado = true;
                exerciciosOmbro[i].dataRealizado = dataAtual;
                listaExercicios[i].classList.add('border');
                listaExercicios[i].classList.add('border-success');
                botoesAcordionTreino[i].click();
                });
            novoPeso[i].addEventListener("keyup", (event) => {
                    if(event.keyCode === 13){
                        exerciciosOmbro[i].pesoAtual = novoPeso[i].value;
                        exerciciosOmbro[i].executado = true;
                        exerciciosOmbro[i].dataRealizado = dataAtual;
                        listaExercicios[i].classList.add('border');
                        listaExercicios[i].classList.add('border-success');
                        botoesAcordionTreino[i].click();
                    }
                });
        }
    }
}

salvarCarga();

//Matar treino = Atualiza o array do peso atual = 0, marca o exercicio como não executado, adiciona borda vermelha no accordion, abre o próximo accordion e dá focus na carga do próximo exercício
//O último ele não abre o próximo exercício, apenas fecha o accordion do último, instigando a salvar o treino inteiro

function matarTreino(){
    for (let i=0; i < exerciciosOmbro.length; i++){
        if (i < exerciciosOmbro.length-1){
            botoesMatarTreino[i].addEventListener("click", () => {
                exerciciosOmbro[i].pesoAtual = 0;
                exerciciosOmbro[i].executado = false;
                exerciciosOmbro[i].dataRealizado = dataAtual;
                listaExercicios[i].classList.add('border', 'border-danger');
                botoesAcordionTreino[i+1].click();
                })
        } else {
            botoesMatarTreino[i].addEventListener("click", () => {
                exerciciosOmbro[i].pesoAtual = 0;
                exerciciosOmbro[i].executado = false;
                exerciciosOmbro[i].dataRealizado = dataAtual;
                listaExercicios[i].classList.add('border', 'border-danger');
                botoesAcordionTreino[i].click(); //quando for o último, ele clicka nele mesmo pra fechar
                })
        }
    }
}

matarTreino();

//ao salvar o treino, aparece uma notificação que o treino foi salvo
salvarTreino.addEventListener("click", () => {
    document.getElementById('notificacaoTreinoSalvo').classList.add('show');
})



//A FAZER AINDA:
// 1) quando clickar pra salvar, caso esteja vermelho, precisa remover a classe do vermelho e deixar verde
// 2) os treinos precisam ser exibidos em async (eu acho), pois caso ele coloque o treino pro final, ele precisa mudar a ordem
// 3) criar uma função pra deixar pro final do treino
// 4) inserir séries e repetições de uma forma bonitinha
