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


//ao clickar no botão salvar ele: muda o peso no array, abre o proximo exercicio, clicka no input do proximo exercicio

salvarCarga1.addEventListener("click", () => {
    exerciciosOmbro[0].ultimoPeso = novoPeso1.value;
    elevacaoFrontal.click();
    //FAZER: adicionar automacao pra clickar automaticamente dentro do input novoPeso2
    });

salvarCarga2.addEventListener("click", () => {
    exerciciosOmbro[1].ultimoPeso = novoPeso2.value;
    unilateral.click();
    //FAZER: adicionar automacao pra clickar automaticamente dentro do input novoPeso3
    });
salvarCarga3.addEventListener("click", () => {
    exerciciosOmbro[2].ultimoPeso = novoPeso3.value;
    unilateral.click();
    });


//ao salvar o treino, aparece uma notificação que o treino foi salvo
salvarTreino.addEventListener("click", () => {
    document.getElementById('notificacaoTreinoSalvo').classList.add('show');
})


