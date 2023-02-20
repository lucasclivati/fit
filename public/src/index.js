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

//ao clickar no botão salvar ele: muda o peso no array, abre o proximo exercicio, clicka no input do proximo exercicio

salvarCarga1.addEventListener("click", () => {
    exerciciosOmbro[0].ultimoPeso = novoPeso1.value;
    elevacaoFrontal.click();
    novoPeso2.focus();
    listaExercicios[0].classList.add('border');
    listaExercicios[0].classList.add('border-success');
    });

salvarCarga2.addEventListener("click", () => {
    exerciciosOmbro[1].ultimoPeso = novoPeso2.value;
    unilateral.click();
    novoPeso3.focus();
    listaExercicios[1].classList.add('border');
    listaExercicios[1].classList.add('border-success');
    });
salvarCarga3.addEventListener("click", () => {
    exerciciosOmbro[2].ultimoPeso = novoPeso3.value;
    unilateral.click();
    listaExercicios[2].classList.add('border');
    listaExercicios[2].classList.add('border-success');
    });


//ao salvar o treino, aparece uma notificação que o treino foi salvo
salvarTreino.addEventListener("click", () => {
    document.getElementById('notificacaoTreinoSalvo').classList.add('show');
})


