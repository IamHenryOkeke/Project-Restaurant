import _ from 'lodash';
import renderHomePage from './home'
import renderContactPage from './contact'
import renderMenuPage from './menus'
// import './styles.css';

renderHomePage()

const homeBtn = document.getElementById("home-button")

const menuBtn = document.getElementById("menu-button")

const contactBtn = document.getElementById("contact-button")

homeBtn.addEventListener("click", renderHomePage)

contactBtn.addEventListener("click", renderContactPage)

menuBtn.addEventListener("click", renderMenuPage)
