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

function clickarNovoPeso1 (){
    document.getElementById("novoPeso1");
    }

salvarCarga1.addEventListener("click", () => {
    exerciciosOmbro[0].ultimoPeso = novoPeso1.value;
    elevacaoFrontal.click();
    });

salvarCarga2.addEventListener("click", () => {
    exerciciosOmbro[1].ultimoPeso = novoPeso2.value;
    unilateral.click();
    });
salvarCarga3.addEventListener("click", () => {
    exerciciosOmbro[2].ultimoPeso = novoPeso3.value;
    unilateral.click();
    });


console.log(exerciciosOmbro);


// function exerciciosExample(){
//     for (let i = 0; i < exerciciosOmbro.length; i++){
//         console.log(i);
//     }
// };

// console.log(exerciciosExample());