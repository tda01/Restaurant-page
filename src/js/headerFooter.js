export function createHeader() {
    const header= document.createElement("header");
    header.classList.add("header");
    const title = document.createElement("h1");
    title.innerText = "Tomi SRL";
    title.classList.add("restaurant-name");
    header.appendChild(title);


    const navBar = document.createElement("nav");
    navBar.classList.add("nav");
    const buttons = new Array(3);
    for (let i = 0; i < 3; i++ ) {
        let button = document.createElement("button");
        button.classList.add("nav-btn");
        buttons[i] = button;
    }
    buttons[0].innerText = "Home";
    buttons[1].innerText = "Menu";
    buttons[2].innerText = "Contact";
    buttons.forEach(button => navBar.appendChild(button));

    header.appendChild(navBar);

    return {header, navButtons: buttons};
}

export function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = "<p class='footer-text'>Copyright &copy; Tomi SRL&trade;</p>";
    return footer;
}