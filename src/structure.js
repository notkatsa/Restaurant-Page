import css from "./index.css"
function Header() {
    const element = document.createElement('header');
    element.classList.add("header");
    element.appendChild(Title());
    element.appendChild(nav());
    return element;
}
function Title() {
    const element = document.createElement('h1');
    element.innerHTML = 'Alkyon Restort Hotel Restaurant';
    element.classList.add('restaurant-name');
    return element;
}

function nav() {
    const button_home = new button("Home");
    const button_menu = new button ("Menu");
    const button_conact = new button ("Contact");
    const navbar = document.createElement('nav');
    navbar.appendChild(button_home.element);
    navbar.appendChild(button_menu.element);
    navbar.appendChild(button_conact.element);
    return navbar;
}

class button {
    constructor(content) {
        this.active = false;
        this.content = content;
        const elem = document.createElement('button');
        elem.classList.add('button-nav'); 
        elem.innerHTML = content;
        this.element = elem;
    }
}

function main() {
    const element = document.createElement("main");
    element.classList.add = "main";
    element.id = "main";
    return element;
}
function footer() {
    const element = document.createElement('footer');
    const p = document.createElement('p');
    p.innerHTML = "Copyright © 2022 notkatsa";
    element.appendChild(p);
    const a = document.createElement('a');
    a.href = 'https://github.com/notkatsa';
    a.innerHTML = '<i class="fab fa-github" aria-hidden="true"></i>'; 
    element.appendChild(a);
    return element;
}
export {Header, footer, main};