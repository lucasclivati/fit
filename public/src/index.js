let exerciciosOmbro = [
    {
        "nome": "Elevação Lateral",
        "ultimoPeso": 7,
        "dataUltimoExec": "01/02/2023",
        "unidadePeso": "kg",
        "idTrigger": "ambos",
        "executado": false
    },
    {
        "nome": "Elevação Frontal",
        "ultimoPeso": 8,
        "dataUltimoExec": "01/02/2023",
        "unidadePeso": "kg",
        "idTrigger": "elevacaoFrontal",
        "executado": false
    },
    {
        "nome": "Elevação Unilateral",
        "ultimoPeso": 6,
        "dataUltimoExec": "01/02/2023",
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

//Salvar carga = Atualiza o array do peso, marca o exercicio como executado, adiciona borda verde no accordion, abre o próximo accordion e dá focus na carga do próximo exercício
//O último ele não abre o próximo exercício, apenas fecha o accordion do último, instigando a salvar o treino inteiro
function salvarCarga(){
    for (let i = 0; i < exerciciosOmbro.length; i++){
        if(i  < exerciciosOmbro.length-1){
            botoesSalvarCarga[i].addEventListener("click", () => {
                exerciciosOmbro[i].ultimoPeso = novoPeso[0].value;
                exerciciosOmbro[i].executado = true;
                listaExercicios[i].classList.add('border');
                listaExercicios[i].classList.add('border-success');
                botoesAcordionTreino[i+1].click();
                novoPeso[i+1].focus();
                });
        } else {
            botoesSalvarCarga[i].addEventListener("click", () => {
                exerciciosOmbro[i].ultimoPeso = novoPeso[2].value;
                exerciciosOmbro[i].executado = true;
                listaExercicios[i].classList.add('border');
                listaExercicios[i].classList.add('border-success');
                botoesAcordionTreino[i].click();
                });
        }
    }
}

salvarCarga();

botoesMatarTreino[0].addEventListener("click", () => {
    exerciciosOmbro[0].ultimoPeso = 0;
    exerciciosOmbro[0].executado = false;
    listaExercicios[0].classList.add('border', 'border-danger');
    botoesAcordionTreino[1].click();
    })

botoesMatarTreino[1].addEventListener("click", () => {
    exerciciosOmbro[1].ultimoPeso = 0;
    exerciciosOmbro[1].executado = false;
    listaExercicios[1].classList.add('border', 'border-danger');
    botoesAcordionTreino[2].click();
    })

botoesMatarTreino[2].addEventListener("click", () => {
    exerciciosOmbro[2].ultimoPeso = 0;
    exerciciosOmbro[2].executado = false;
    listaExercicios[2].classList.add('border', 'border-danger');
    botoesAcordionTreino[2].click(); //quando for o último, ele clicka nele mesmo pra fechar
    })

//ao salvar o treino, aparece uma notificação que o treino foi salvo
salvarTreino.addEventListener("click", () => {
    document.getElementById('notificacaoTreinoSalvo').classList.add('show');
})

//permitir usar enter para passar pro próximo treino
//converter o matar treino pra i+
//ao invés de apresentar através de html, fazer o html ser exibido através de array
//criar uma função pra deixar pro final do treino



