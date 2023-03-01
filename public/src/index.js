let exerciciosOmbro = [
    {
        "nome": "Elevação Lateral",
        "ultimoPeso": 7,
        "dataUltimoExec": "01/02/2023",
        "pesoAtual": 0,
        "dataRealizado": null,
        "series": 3,
        "repeticoes": 12,
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
        "series": 3,
        "repeticoes": 10,
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
        "series": 3,
        "repeticoes": 15,
        "unidadePeso": "kg",
        "idTrigger": "unilateral",
        "executado": false
    }
];

//criando dinamicamente divs com base em array

// Pegar a referencia de onde fazer o display do html

function gerarDivExercicio(i) {
    // Criar uma nova div para cada i
    // Verifica se é a primeira, no meio ou o último accordion, cada um é formatado de um jeito.
        let text = 
            '<h2 class="accordion-header" id="heading' + i + '">'
            +'<button id="'+ exerciciosOmbro[i].idTrigger +'" class="accordion-button collapsed accordionExercicio" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + i + '" aria-expanded="false" aria-controls="collapse' + i + '">'
                +'<div>'
                    +'<div>'
                    +'<h5 class="gradientFont fw-bold">' + Number(i+1) + '. '+exerciciosOmbro[i].nome+' ('+exerciciosOmbro[i].series+' x '+ exerciciosOmbro[i].repeticoes + ' repetições)'+'</h5>'
                    +'</div>'
                        +'<div>'
                        +exerciciosOmbro[i].ultimoPeso+'kg em '+exerciciosOmbro[i].dataUltimoExec
                        +'</div>'
                    +'</div>'
                    +'</button>'
                    +'</h2>'
                    +'<div id="collapse'+i+'" class="accordion-collapse collapse '+ (i===0 ? 'show' : '')+ '" aria-labelledby="heading'+i+'"'
                    + 'data-bs-parent="#accordionJs">'
                    +'<div class="accordion-body">'
                    +'  <div class="input-group mb-3">'
                    +'    <input type="number" placeholder="Carga atual (kg)" class="form-control novoPeso" aria-label="">'
                    +'    <button class="btn btn-primary salvarCarga" type="button">'
                    +'      Salvar <span class="d-none d-md-inline-block"></span>'
                    +'    </button>'
                    +'    <div class="dropdown-menu-end">'
                    +'      <button type="button" class="btn btn-dark dropdown-toggle rounded-start-0" data-bs-toggle="dropdown"'
                    +'        aria-expanded="false">'
                    +'        Ações'
                    +'                  </button>'
                    +'      <ul class="dropdown-menu" data-bs-theme="dark">'
                    +'        <li><a class="dropdown-item text-white historicoCargas">Histórico Cargas</a></li>'
                    //+'        <li><a class="dropdown-item text-warning deixarFim">Deixar pro fim</a></li>'
                    +'        <li>'
                    +'          <hr class="dropdown-divider">'
                    +'        </li>'
                    +'        <li><a class="dropdown-item text-danger matarTreino">Matar Exercício</a></li>'
                    +'      </ul>'
                    +'    </div>'
                    +'  </div>'
                    +'</div>'
                +'  </div>';
        let newDiv = document.createElement("div");
        newDiv.className +="accordion-item";
        newDiv.innerHTML = text;
        accordionJs.appendChild(newDiv);
    };

for (let i = 0; i < exerciciosOmbro.length; i++){
    gerarDivExercicio(i);
};

accordionJs = document.getElementById("accordionJs");
//let listaExerciciosLive = accordionJs.childNodes; //lista de exercicios html live
let listaExercicios = document.querySelectorAll('.accordion-item'); //lista de exercicios estático
let botoesSalvarCarga = document.querySelectorAll(".salvarCarga");
let botoesMatarTreino = document.querySelectorAll(".matarTreino");
let exerciciosAccordionBody = document.querySelectorAll(".accordion-body");
let botoesAcordionTreino = document.querySelectorAll(".accordionExercicio");
let novoPeso = document.querySelectorAll(".novoPeso");
let botoesDeixarFim = document.querySelectorAll(".deixarFim");


var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var dataAtual = [day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds];


//Essa parte é a estrutura pra começar a converter o botão de salvar pra transformar o for lá debaixo em um forEeach
// botoesSalvarCarga.forEach( (elementoClickado)=> {
//     elementoClickado.addEventListener("click", (eventoClickado) => {
//         console.log(eventoClickado)
//     })
// });

// function acoesBotoes(operacaoBotao){
//     if(operacaoBotao === "Salvar"){
//         console.log("Salvar")
//     } else {
//         console.log("outros botoes")
//     }
// };


//Salvar carga = Atualiza o array do peso, marca o exercicio como executado, adiciona borda verde no accordion, abre o próximo accordion e dá focus na carga do próximo exercício
//O último ele não abre o próximo exercício, apenas fecha o accordion do último, instigando a salvar o treino inteiro

for (let i = 0; i < exerciciosOmbro.length; i++){
    if(i  < exerciciosOmbro.length-1){
        botoesSalvarCarga[i].addEventListener("click", () => {
            exerciciosOmbro[i].pesoAtual = novoPeso[i].value;
            exerciciosOmbro[i].executado = true;
            exerciciosOmbro[i].dataRealizado = dataAtual;
            listaExercicios[i].classList.remove('border-danger');
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
                    listaExercicios[i].classList.remove('border-danger');
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
            listaExercicios[i].classList.remove('border-danger');
            listaExercicios[i].classList.add('border');
            listaExercicios[i].classList.add('border-success');
            botoesAcordionTreino[i].click();
            });
        novoPeso[i].addEventListener("keyup", (event) => {
                if(event.keyCode === 13){
                    exerciciosOmbro[i].pesoAtual = novoPeso[i].value;
                    exerciciosOmbro[i].executado = true;
                    exerciciosOmbro[i].dataRealizado = dataAtual;
                    listaExercicios[i].classList.remove('border-danger');
                    listaExercicios[i].classList.add('border');
                    listaExercicios[i].classList.add('border-success');
                    botoesAcordionTreino[i].click();
                    salvarTreino.focus();
                }
            });
    }
};

//Matar treino = Atualiza o array do peso atual = 0, marca o exercicio como não executado, adiciona borda vermelha no accordion, abre o próximo accordion e dá focus na carga do próximo exercício
//O último ele não abre o próximo exercício, apenas fecha o accordion do último, instigando a salvar o treino inteiro


for (let i=0; i < exerciciosOmbro.length; i++){
    if (i < exerciciosOmbro.length-1){
        botoesMatarTreino[i].addEventListener("click", () => {
            exerciciosOmbro[i].pesoAtual = 0;
            exerciciosOmbro[i].executado = false;
            exerciciosOmbro[i].dataRealizado = null;
            listaExercicios[i].classList.remove('border-success');
            listaExercicios[i].classList.add('border', 'border-danger');
            botoesAcordionTreino[i+1].click();
        })
    } else {
        botoesMatarTreino[i].addEventListener("click", () => {
            exerciciosOmbro[i].pesoAtual = 0;
            exerciciosOmbro[i].executado = false;
            exerciciosOmbro[i].dataRealizado = null;
            listaExercicios[i].classList.remove('border-success');
            listaExercicios[i].classList.add('border', 'border-danger');
            botoesAcordionTreino[i].click();
        })
    }
}



//ao salvar o treino, aparece uma notificação que o treino foi salvo
salvarTreino.addEventListener("click", () => {
    document.getElementById('notificacaoTreinoSalvo').classList.add('show');
})


//removida a funcionalidade de deixar pro final

// for (let i=0; i < exerciciosOmbro.length; i++){
//     botoesDeixarFim[i].addEventListener("click", () =>{
//         // exerciciosOmbro.push(exerciciosOmbro.splice(i,1)[0]);
//         listaExercicios[i].remove();
//         gerarDivExercicio(i);
//         }
//     )
// }


//A FAZER AINDA:
// 1) precisa gerar todas as divs novamente ao mudar pro fim (os numeros estão ficando errados, ou alterar o número do último para ficar diferente dos demais)


