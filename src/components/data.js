


function createData(Model, Average, ARC, HellaSwag, MMLU, TruthfulQA,) {
    return {
        Model,
        Average,
        ARC,
        HellaSwag,
        MMLU,
        TruthfulQA,
    };
}


const rows =
    [
        createData('gpt3.5', '80', 1, 23, 67, 4.3),
        createData('gpt3', '70', 2, 25.0, 51, 4.9),
        createData('gpt4', '90', 3, 16.0, 24, 6.0),

    ];

export default rows;