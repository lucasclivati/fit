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



//criando dinamicamente divs com base em array

// Pegar a referencia de onde fazer o display do html
var htmlExercicios = document.getElementById("htmlExercicios");

 for (var i = 0; i < exerciciosOmbro.length; i++) {
  // Criar uma nova div para cada i
  let newDiv = document.createElement("div");

  // inserir o conteudo de cada div
  let text = document.createTextNode(`

  Exercício: ${exerciciosOmbro[i].nome} Peso: ${exerciciosOmbro[i].pesoAtual}, Data Executado: ${exerciciosOmbro.dataUltimoExec}
  
  `);
  
  newDiv.appendChild(text);

  // adicionar a div a listagem de exercicios
  htmlExercicios.appendChild(newDiv);
}


//A FAZER AINDA:
//ao invés de apresentar através de html, fazer o html ser exibido através de array
//criar uma função pra deixar pro final do treino
//inserir séries e repetições



