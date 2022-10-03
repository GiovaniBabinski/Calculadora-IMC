

function validarCalculo() {
    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let dados = document.getElementById("dados")
    let reset = document.getElementById("reset")


    if ((nome != "" && altura != "" && peso != "")) {
        const valorIMC = (peso / (altura * altura)).toFixed(2);


        let classificação = "";

        if (valorIMC < 18.5) {
            classificação = "abaixo do peso";
        } else if (valorIMC < 25) {
            classificação = "com peso ideal. Parabéns!"
        } else if (valorIMC < 30) {
            classificação = "um pouco acima do peso"
        } else if (valorIMC < 35) {
            classificação = "com obesidade grau I"
        } else if (valorIMC < 40) {
            classificação = "com obesidade grau II"
        } else {
            classificação = "com obesidade grau III. Cuidado!"
        }
        dados.innerHTML = "Olá " + nome + ". Seu IMC atual é de " + valorIMC + ". Você está " + classificação + ".";
        reset.style.display = "block";


    } else {
        dados.style.color = "red";
        dados.innerHTML = "Você precisa digitar todos os campos!"
    }
}

function zerarDados() {
    let nome = document.getElementById("nome")
    let altura = document.getElementById("altura")
    let peso = document.getElementById("peso")
    let dados = document.getElementById("dados")
    let reset = document.getElementById("reset")

    nome.value = "";
    altura.value = "";
    peso.value = "";
    dados.innerHTML = "";
    reset.style.display = "none";




}

