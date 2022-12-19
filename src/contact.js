import Icon from './USA-map.jpg'
function contact() {
    const contact = document.createElement('div');
    contact.classList.add("contact");
    const p1 = document.createElement('p');
    p1.innerHTML = '📞 123 4567 890';
    const p2 = document.createElement('p');
    p2.innerHTML = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
    const myIcon = new Image();
    myIcon.src = Icon;
    contact.appendChild(p1);
    contact.appendChild(p2);
    contact.appendChild(myIcon);
    return contact;
}

export default contact;