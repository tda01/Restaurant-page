import './style.css'
import {createHeader} from "./js/headerFooter";
import {createFooter} from "./js/headerFooter";
import {createHomeSection} from "./js/home";
import {createContactSection} from "./js/contact";
import {createMenuSection} from "./js/menu";

const content = document.querySelector(".content");
const {header, navButtons} = createHeader();
const footer = createFooter();
const mainContent = document.createElement("main");
const home = createHomeSection();
const contact = createContactSection();
const menu = createMenuSection();
mainContent.classList.add("main-content");
function initPage() {
    content.appendChild(header);
    content.appendChild(mainContent);
    mainContent.appendChild(home);
    content.appendChild(footer);
}

navButtons[0].classList.add("active");

function removeActiveStatus() {
    navButtons.forEach(navButton => {
        if (navButton.classList.contains("active")) {
            navButton.classList.remove("active");
        }
    })
}
navButtons.forEach((navButton, index) => navButton.addEventListener("click", function () {
    mainContent.innerHTML = "";
    removeActiveStatus();
    navButton.classList.add("active");
    switch(index) {
        case 0:
            mainContent.appendChild(home);
            break;
        case 1:
            mainContent.appendChild(menu);
            break;
        case 2:
            mainContent.appendChild(contact);
            break;
    }
}))

initPage();