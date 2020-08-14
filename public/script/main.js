const elementButton = document.querySelector("#add-time")

elementButton.onclick = addField


function addField() {
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    const field = newFieldContainer.querySelectorAll('input')
    field.forEach(input => input.value = " ")

    const containerHtml = document.querySelector('#schedule-items')
    containerHtml.appendChild(newFieldContainer)

}