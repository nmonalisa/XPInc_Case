import { healthService } from "../services/services.js";

async function getHealthData() {
    const response = healthService()
    return response
        .then(response => response.data)
        .catch(err => console.log("Erro ao consumir API"))
}

async function handlerHTMLTags(tagID, response) {
    const tag = document.querySelector(tagID)

    tag.innerHTML = response == undefined ?
        "Ocorreu um erro. Tente novamente!" :
        response.value

    tag.className = response == undefined ?
        "error" : "success"
}

async function showHealth() {
    const response = await getHealthData()
    await handlerHTMLTags("#health-message", response)
}

document.querySelector("#health-btn")
    .addEventListener("click", (event) => {
        event.preventDefault()
        showHealth()
    })