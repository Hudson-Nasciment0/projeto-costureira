

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
    const numero = '556481339346'
  
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank')
}











