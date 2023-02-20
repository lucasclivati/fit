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

// console.log(exerciciosOmbro);

// function exerciciosExample(){
//     for (let i = 0; i < exerciciosOmbro.length; i++){
//         console.log(i);
//     }
// };

listaExercicios = document.querySelectorAll('.accordion-item');

botoesSalvarCarga = document.querySelectorAll('.salvarCarga');

//ao clickar no botão salvar ele: muda o peso no array, abre o proximo exercicio, clicka no input do proximo exercicio

salvarCarga0.addEventListener("click", () => {
    exerciciosOmbro[0].ultimoPeso = novoPeso0.value;
    exerciciosOmbro[0].executado = true;
    elevacaoFrontal.click();
    novoPeso1.focus();
    listaExercicios[0].classList.add('border');
    listaExercicios[0].classList.add('border-success');
    });

salvarCarga1.addEventListener("click", () => {
    exerciciosOmbro[1].ultimoPeso = novoPeso1.value;
    exerciciosOmbro[1].executado = true;
    unilateral.click();
    novoPeso2.focus();
    listaExercicios[1].classList.add('border');
    listaExercicios[1].classList.add('border-success');
    });

salvarCarga2.addEventListener("click", () => {
    exerciciosOmbro[2].ultimoPeso = novoPeso2.value;
    exerciciosOmbro[2].executado = true;
    unilateral.click();
    listaExercicios[2].classList.add('border');
    listaExercicios[2].classList.add('border-success');
    });


matar0.addEventListener("click", () => {
    exerciciosOmbro[0].ultimoPeso = 0;
    exerciciosOmbro[0].executado = false;
    listaExercicios[0].classList.add('border', 'border-danger');
    elevacaoFrontal.click();
    })

matar1.addEventListener("click", () => {
    exerciciosOmbro[1].ultimoPeso = 0;
    exerciciosOmbro[1].executado = false;
    listaExercicios[1].classList.add('border', 'border-danger');
    unilateral.click();
    })

matar2.addEventListener("click", () => {
    exerciciosOmbro[2].ultimoPeso = 0;
    exerciciosOmbro[2].executado = false;
    listaExercicios[2].classList.add('border', 'border-danger');
    unilateral.click();
    })

//ao salvar o treino, aparece uma notificação que o treino foi salvo
salvarTreino.addEventListener("click", () => {
    document.getElementById('notificacaoTreinoSalvo').classList.add('show');
})


//tirar os nomes fixos de id e usar posição dos botões (salvar carga, peso e matar)
//converter tudo pra foreach
//ao invés de apresentar através de html, fazer o html ser exibido através de array
//criar uma função pra deixar pro final do treino


