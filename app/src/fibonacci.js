import { fibonacciService } from "../services/services.js";

async function getFibonacciData() {
    const nElements = document.querySelector("#elements").value
    const requestBody = { elements: nElements }
    const response = fibonacciService(requestBody)
    return response
        .then(response => response.data)
        .catch(error => console.log("Erro ao consumir API"))
}

function handlerSendButton(inputValue) {
    const sendButton = document.querySelector(".fibonacci-btn")
    const inputIsEmpty = (inputValue.length == 0 || inputValue + 0 == 0)
    sendButton.disabled = inputIsEmpty ? true : false
    inputIsEmpty ? false : sendButton.classList.remove("disabled")
}

function handlerHTMLTags(tagID, response) {
    const tag = document.querySelector(tagID)
    tag.innerHTML = response == undefined ?
        "Ocorreu um erro. Tente novamente!" :
        `Sequência de Fibonacci: <br><br> ${response.value.join(" - ")}`

    tag.className = response == undefined ?
        "error" : "success"
}

async function showFibonacci() {
    const response = await getFibonacciData()
    handlerHTMLTags("#fibonacci-message", response)
}

document.querySelector(".fibonacci-btn")
    .addEventListener("click", (event) => {
        event.preventDefault()
        showFibonacci()
    })

document.querySelector("#elements")
    .addEventListener("keyup", (event) => {
        handlerSendButton(event.target.value)
    })