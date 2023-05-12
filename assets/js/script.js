// variaveis (  divs e botões )
let botao = document.querySelector("button")

let conteinerEvent = document.querySelector(".conteiner")

// variaveis de span das notas
let spanNote1 = document.querySelector(".span1")

let spanNote2 = document.querySelector(".span2")

let spanNote3 = document.querySelector(".span3")

let spanNote4 = document.querySelector(".span4")

let spanNote5 = document.querySelector(".span5")

let spanPage = document.querySelectorAll("span")

// eventos
spanNote1.addEventListener("click" , () => {
    spanNote1.setAttribute("class" , "nota1")
})

spanNote2.addEventListener("click" , () => {
    spanNote2.setAttribute("class" , "nota2")
})

spanNote3.addEventListener("click" , () => {
    spanNote3.setAttribute("class" , "nota3")
})

spanNote4.addEventListener("click" , () => {
    spanNote4.setAttribute("class" , "nota4")
})

spanNote5.addEventListener("click" , () => {
    spanNote5.setAttribute("class" , "nota5")
})


// evento pricipal
botao.addEventListener("click" , executar )


// funções
function executar(){

    // modificações no conteiner e no paragrafo
    conteinerEvent.style.display = "flex"
    conteinerEvent.style.flexDirection = "column"
    conteinerEvent.style.alignItems = "center"
    const paragrafo = document.querySelector("p")
    paragrafo.style.textAlign = "center"
    // mudar imagem
    let img = document.querySelector("img")
    img.setAttribute("src" , "assets/images/illustration-thank-you.svg")
    img.setAttribute("class" , "img2")

    // adionar valor da nota que foi colocada
    let spanNota = document.createElement("span")
    spanNota.setAttribute("class" , "classMostrarNotas")
    img.after(spanNota)
    if(spanNote1.getAttribute("class") == "nota1"){
        spanNota.append("You selected 1 out of 5")
    }
    if(spanNote2.getAttribute("class") == "nota2"){
        spanNota.append("You selected out 2 of 5")
    }
    if(spanNote3.getAttribute("class") == "nota3"){
        spanNota.append("You selected out 3 of 5")
    }
    if(spanNote4.getAttribute("class") == "nota4"){
        spanNota.append("You selected 4 out of 5")
    }
    if(spanNote5.getAttribute("class") == "nota5"){
        spanNota.append("You selected 5 out of 5")
    }

    if(spanNote1.getAttribute("class") == "span1" &&
    spanNote2.getAttribute("class") == "span2" &&
    spanNote3.getAttribute("class") == "span3" &&
    spanNote4.getAttribute("class") == "span4" && 
    spanNote5.getAttribute("class") == "span5"){
        spanNota.append("você não enviou nehuma nota")
    }
    // mudar h3
    let titleAgradecimento = document.querySelector("h3")
    titleAgradecimento.innerHTML = "Thank You!"

    // remover botão e notas
    botao.style.display = "none"
    let divNotas = document.querySelector(".numbers_notas")
    divNotas.style.display = "none"
}