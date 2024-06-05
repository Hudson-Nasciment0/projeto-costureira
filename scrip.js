

let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")


function cliqueiNoBotão() {
    formulario.style.left = "600px"
    mascara.style.visibility = "visible"
    

}



function fecharForm() {
    formulario.style.left = "-340px"
    mascara.style.visibility = "hidden"
    
}
    // função de enviar  informações do formulario.
function enviarWhatsApp() {

    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('telefone').value
    const duvida = document.getElementById('duvida').value

    if (nome === "" || telefone === "" || duvida === "") {
        fecharForm()
    }

    else {
        const mensagem = `Nome: ${nome} - Telefone: ${telefone} - Digite sua necessidade: ${duvida}`
        

        window.open(`https://wa.me/5522981241625?text=${mensagem}`,'_blank')
        // fecharForm()
    }


}

// Receber seletor do id celular
const telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {

    // Remover os caracteres não numéricos usando a expressão regular /\D/g e limitar a 11 dígitos.
    const limparValor = telefone.value.replace(/\D/g, "").substring(0, 11);

    // Dividir a string em um array de caracteres individuais.
    let numerosArray = limparValor.split("");

    // Criar a variável para receber o número formatado
    let numeroFormatado = "";

    // Acessa o IF quando a quantidade de números é maior do que zero
    if (numerosArray.length > 0) {
        // Formatar o DD e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }

    // Acessa o IF quando a quantidade de números é maior do que dois
    if (numerosArray.length > 2) {
        // Formatar o número do telefone e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += ` ${numerosArray.slice(2, 7).join("")}`;
    }

    // Acessa o IF quando a quantidade de números é maior do que sete
    if (numerosArray.length > 7) {
        // Formatar o número do telefone e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }

    // Enviar para o campo o número formatado
    telefone.value = numeroFormatado;
});

// button de fechar formulario!








