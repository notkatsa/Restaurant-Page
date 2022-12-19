import { footer, Header, main } from "./structure";
import {home} from "./home";
import menu from "./menu";
import contact from "./contact";
const container = document.getElementById("content");
container.append(Header());
container.appendChild(main());
const main_div = document.getElementById("main");

const buttons = document.getElementsByClassName("button-nav");
for (let i = 0; i< buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let cont = buttons[i].innerHTML.toUpperCase();
        if (cont == "MENU") {
            main_div.innerHTML = '';
            main_div.appendChild(menu());
            buttons[i].classList.add("active");
            buttons[0].classList.remove("active");
            buttons[2].classList.remove("active");
            
        }
        else if ( cont == "HOME") {
            main_div.innerHTML = '';
            main_div.appendChild(home());
            buttons[i].classList.add("active");
            buttons[1].classList.remove("active");
            buttons[2].classList.remove("active");
        }
        else if (cont == "CONTACT") {
            main_div.innerHTML = '';
            main_div.appendChild(contact());
            buttons[i].classList.add("active");
            buttons[1].classList.remove("active");
            buttons[0].classList.remove("active");
        }
    })
}
main_div.appendChild(home());
buttons[0].classList.add("active");
container.append(footer());

