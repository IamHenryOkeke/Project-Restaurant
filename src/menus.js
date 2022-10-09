const divContent = document.getElementById("content")

const renderMenuPage = () => {
    divContent.innerHTML = ""
    const phone = document.createElement("p")
    const address = document.createElement("p")
    const chefPhoto = document.createElement("img")

    const divContact = document.createElement("div")
    divContact.setAttribute("id", "menu")

    phone.textContent = "08981828918"
    address.textContent = "Milky way galaxy"
    // chefPhoto.textContent = "TEST"

    divContact.appendChild(phone)
    divContact.appendChild(address)
    // divContact.appendChild(chefPhoto)

    divContent.appendChild(divContact)
}

export default renderMenuPage
