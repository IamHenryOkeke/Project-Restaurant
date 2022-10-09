import chefImage from './images/chef_PNG196.png';

const divContent = document.getElementById("content")

const renderContactPage = () => {
    divContent.innerHTML = ""
    const titlePhone = document.createElement("h2")
    const phone = document.createElement("p")
    const titleAddress = document.createElement("h2")
    const address = document.createElement("p")
    const chefPhoto = document.createElement("img")

    const divContact = document.createElement("div")
    divContact.setAttribute("id", "contact")

    titlePhone.textContent = "Reach us on:"
    titleAddress.textContent = "Our Address:"
    phone.textContent = "+01 898 1828 0918"
    address.textContent = "Milky way galaxy"
    chefPhoto.src = chefImage

    divContact.appendChild(titlePhone)
    divContact.appendChild(phone)
    divContact.appendChild(titleAddress)
    divContact.appendChild(address)
    divContact.appendChild(chefPhoto)


    divContent.appendChild(divContact)
}

export default renderContactPage
