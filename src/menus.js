import Seafoods from './images/Seafoods.png';
import Cupcakes from './images/Cupcakes.png';
import Cereals from './images/Cereals.png';
import Wine from './images/Wine.png';

const divContent = document.getElementById("content")

const renderMenuPage = () => {
    divContent.innerHTML = ""

    const foodPhoto1 = document.createElement("img")
    const foodTitle1 = document.createElement("h2")
    const foodDescription1 = document.createElement("p")
    foodTitle1.textContent = "Seafood"
    foodDescription1.textContent = "Best of Crustaceans such as lobsters, shrimps and prawns"
    foodPhoto1.src = Seafoods
    const item1 = document.createElement("div")
    item1.setAttribute("id", "item")
    item1.appendChild(foodPhoto1)
    item1.appendChild(foodTitle1)
    item1.appendChild(foodDescription1)

    const foodPhoto2 = document.createElement("img")
    const foodTitle2 = document.createElement("h2")
    const foodDescription2 = document.createElement("p")
    foodTitle2.textContent = "Cupcakes"
    foodDescription2.textContent = "Best of Cupcakes"
    foodPhoto2.src = Cupcakes
    const item2 = document.createElement("div")
    item2.setAttribute("id", "item")
    item2.appendChild(foodPhoto2)
    item2.appendChild(foodTitle2)
    item2.appendChild(foodDescription2)

    const foodPhoto3 = document.createElement("img")
    const foodTitle3 = document.createElement("h2")
    const foodDescription3 = document.createElement("p")
    foodTitle3.textContent = "Wine n' Dine"
    foodDescription3.textContent = "Best of French Wine"
    foodPhoto3.src = Wine
    const item3 = document.createElement("div")
    item3.setAttribute("id", "item")
    item3.appendChild(foodPhoto3)
    item3.appendChild(foodTitle3)
    item3.appendChild(foodDescription3)

    const foodPhoto4 = document.createElement("img")
    const foodTitle4 = document.createElement("h2")
    const foodDescription4 = document.createElement("p")
    foodTitle4.textContent = "Cereals"
    foodDescription4.textContent = "Best of Cereals"
    foodPhoto4.src = Cereals
    const item4 = document.createElement("div")
    item4.setAttribute("id", "item")
    item4.appendChild(foodPhoto4)
    item4.appendChild(foodTitle4)
    item4.appendChild(foodDescription4)

    

    

    const divMenu = document.createElement("div")
    divMenu.setAttribute("id", "menu")
    divMenu.appendChild(item1)
    divMenu.appendChild(item2)
    divMenu.appendChild(item3)
    divMenu.appendChild(item4)
    
    divContent.appendChild(divMenu)
}

export default renderMenuPage
