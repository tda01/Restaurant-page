import Bolognese from "../img/meals/bolognese.webp";
import Amatriciana from "../img/meals/amatriciana.webp";
import Carbonara from "../img/meals/carbonara.webp";
import ChickenAlfredo from "../img/meals/chickenalfredo.webp";
import Pesto from "../img/meals/pesto.webp";
export function createMenuSection() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const meals = [[Bolognese, "Tagliatelle Bolognese"], [Amatriciana, "Spaghetti Amatriciana"],
        [Carbonara, "Homemade Pasta Carbonara"],
        [ChickenAlfredo, "Tagliatelle Chicken Alfredo"],
    [Pesto, "Penne with Pesto"]];
    for (let i = 0; i < 5; i++) {
        const meal = createMeal(meals[i][0], meals[i][1]);
        menu.appendChild(meal);
    }

    return menu;
}

function createMeal(src, title) {
    const meal = document.createElement("div");
    meal.classList.add("meal");
    const img = new Image();
    img.src = src;
    img.alt = title;
    img.classList.add("meal-img");
    meal.appendChild(img);
    const mealContent = document.createElement("div");
    mealContent.classList.add("meal-content");
    const mealTitle = document.createElement("p");
    mealTitle.classList.add("meal-title");
    mealTitle.innerText = title;
    mealContent.appendChild(mealTitle);
    meal.appendChild(mealContent);
    return meal;
}