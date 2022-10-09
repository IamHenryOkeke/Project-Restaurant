import chefImage from './images/chef_PNG195.png';

const divContent = document.getElementById("content")

const renderHomePage = () => {
    divContent.innerHTML = ""

    const title = document.createElement("h2")
    const para = document.createElement("p")
    const imageIcon = document.createElement("img")

    const divHome = document.createElement("div")
    divHome.setAttribute("id", "home")

    title.textContent = "Why The Restaurant?"
    para.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum impedit optio autem distinctio provident, delectus eaque minima! Architecto ipsum perferendis et aut, doloremque quos saepe sunt, assumenda, cum accusantium deserunt!"
    imageIcon.src = chefImage

    divHome.appendChild(title)
    divHome.appendChild(para)
    divHome.appendChild(imageIcon)

    divContent.appendChild(divHome)
}

export default renderHomePage
