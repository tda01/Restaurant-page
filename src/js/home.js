import Chef from "../img/chef.png";
export function createHomeSection() {
    const home = document.createElement("div");
    home.classList.add("home");
    home.innerHTML = "<p class=\"home-paragraph\">Best pasta in the world!</p>\n" +
        "<p class=\"home-paragraph\">Made by Chef Thomas!</p>\n";
    const chefImg = new Image();
    chefImg.src = Chef;
    chefImg.classList.add("home-img");
    home.appendChild(chefImg);
    return home;
}