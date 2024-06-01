

let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")


console.log(formulario)

function cliqueiNoBotão(){
    formulario.style.left = "600px"
    mascara.style.visibility = "visible"
}

let sumirFormulario = document.querySelector(".fale-conosco")

console.log(sumirFormulario)

function sumir(){
    sumirFormulario.style.left = "-316px"
    mascara.style.visibility = "hidden"
}

function enviarWhatsApp() {

    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('telefone').value
    const duvida = document.getElementById('duvida').value
  
    const mensagem = `Nome: ${nome} - Telefone: ${telefone} - Digite sua necessidade: ${duvida}`
    const numero = '5522981241625'
  
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank')
}

// Receber seletor do id celular
var telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {

    // Remover os caracteres não numéricos usando a expressão regular /\D/g e limitar a 11 dígitos.
    var limparValor = telefone.value.replace(/\D/g, "").substring(0,11);

    // Dividir a string em um array de caracteres individuais.
    var numerosArray = limparValor.split("");

    // Criar a variável para receber o número formatado
    var numeroFormatado = "";
    
    // Acessa o IF quando a quantidade de números é maior do que zero
    if(numerosArray.length > 0){
        // Formatar o DD e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    }

    // Acessa o IF quando a quantidade de números é maior do que dois
    if(numerosArray.length > 2){
        // Formatar o número do telefone e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
    }

    // Acessa o IF quando a quantidade de números é maior do que sete
    if(numerosArray.length > 7){
        // Formatar o número do telefone e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
    }

    // Enviar para o campo o número formatado
    telefone.value = numeroFormatado;
});








