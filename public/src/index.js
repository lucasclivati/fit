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



// function exerciciosExample(){
//     for (let i = 0; i < exerciciosOmbro.length; i++){
//         console.log(i);
//     }
// };

//ao clickar no botão salvar ele: muda o peso no array, abre o proximo exercicio, clicka no input do proximo exercicio
botoesSalvarCarga[0].addEventListener("click", () => {
    exerciciosOmbro[0].ultimoPeso = novoPeso[0].value;
    exerciciosOmbro[0].executado = true;
    listaExercicios[0].classList.add('border');
    listaExercicios[0].classList.add('border-success');
    botoesAcordionTreino[1].click();
    novoPeso[1].focus();
    });

botoesSalvarCarga[1].addEventListener("click", () => {
    exerciciosOmbro[1].ultimoPeso = novoPeso[1].value;
    exerciciosOmbro[1].executado = true;
    listaExercicios[1].classList.add('border');
    listaExercicios[1].classList.add('border-success');
    botoesAcordionTreino[2].click();
    novoPeso[2].focus();
    });

botoesSalvarCarga[2].addEventListener("click", () => {
    exerciciosOmbro[2].ultimoPeso = novoPeso[2].value;
    exerciciosOmbro[2].executado = true;
    listaExercicios[2].classList.add('border');
    listaExercicios[2].classList.add('border-success');
    botoesAcordionTreino[2].click(); //qnd for o ultimo clickar nele mesmo
    });


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


//converter tudo pra foreach
//ao invés de apresentar através de html, fazer o html ser exibido através de array
//criar uma função pra deixar pro final do treino
//permitir usar enter para passar pro próximo treino


