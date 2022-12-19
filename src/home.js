import Icon from './chef.png';
function home() {
   const elem = document.createElement('div');
   elem.classList.add("home");
   const p1 = document.createElement('p');
   p1.innerHTML = ("5star food from 5star cooks")
   const p2 = document.createElement('p');
   p2.innerHTML = ("Made with passion since 1908");
   elem.appendChild(p1);
   elem.appendChild(p2);
   const myIcon = new Image();
   myIcon.src = Icon;
   elem.appendChild(myIcon);
   const p3 = document.createElement('p');
   p3.innerHTML = "Order online or visit us!"
   elem.appendChild(p3);

   return elem;
}

export { home };