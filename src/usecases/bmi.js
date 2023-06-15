// TODO: definir peso mínimo e limite de peso usando bom senso 
// TODO: definir altura mínimo e limite de altura usando bom senso

function calculateBmi(weight, height) {
    const calculate = weight / (height ** 2) 
    const resultToFloat = Number(calculate.toFixed(2))
    return resultToFloat
}

module.exports = calculateBmi