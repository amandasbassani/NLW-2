// Procurar botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField(){
    // Duplicar os campos:
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //bolean true or false

    // limpar os campos:
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field){
        // pega o field do momento e limpa
        field.value = ""
    })

    // Colocar na página:
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}