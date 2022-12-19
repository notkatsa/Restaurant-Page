function menu() {
    const menu = document.createElement('div');
    menu.classList.add("menu");
    menu.id = "menu";
    const margarita = new food("Margarita", "Tomato sauce, Mozzarella, Tomato")
    const meat_pizza = new food("Carne", "Tomato Sauce, Mozzarella, Tomato, Ham, Bacon");
    const Garbonara = new food("Garbonara", "Spaghetti, Garbonara Sauce, Shredded Peccorino");
    const Napolitana = new food("Napolitana", "Spaghetti, Napolitana Sauce, Shredded Parmezan");
    const Bologneze = new food("Bologneze", "Spaghetti, Bologneze, Shredded Pecorino");
    const Snizzel = new food("Snizzel", "Chicken fillet (comes with fries)");
    const Salad1 = new food("Iceberg Orange", "Iceberg, orange slices, orange dressing, cheese, nuts");
    const Salad2 = new food("Ceasar salad", "Iceberg, chicken, egg, anchovies, garlic, Parmesan");
    menu.appendChild(margarita.card);
    menu.appendChild(meat_pizza.card);
    menu.appendChild(Garbonara.card);
    menu.appendChild(Napolitana.card);
    menu.appendChild(Bologneze.card);
    menu.appendChild(Snizzel.card);
    menu.appendChild(Salad1.card);
    menu.appendChild(Salad2.card);
    return menu;
}

class food {
    constructor(name, ingredients) {
        const h3 = document.createElement('h3');
        h3.innerHTML = name;
        const desc = document.createElement('p');
        desc.innerHTML = ingredients;
        const card = document.createElement('div');
        card.appendChild(h3);
        card.appendChild(desc);
        card.classList.add('card');
        this.card = card;
    };
}

export default menu;