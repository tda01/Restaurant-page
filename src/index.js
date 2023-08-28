import './style.css'
import {createHeader} from "./js/headerFooter";
import {createFooter} from "./js/headerFooter";
import {createHomeSection} from "./js/home";

const content = document.querySelector(".content");
const {header, navButtons} = createHeader();
const footer = createFooter();
const home = createHomeSection();
const mainContent = document.createElement("main");
mainContent.classList.add("main-content");

content.appendChild(header);
content.appendChild(mainContent);
mainContent.appendChild(home);
content.appendChild(footer);

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
    console.log(index);
    switch(index) {
        case 0:
            mainContent.appendChild(home);
            break;
    }
}))