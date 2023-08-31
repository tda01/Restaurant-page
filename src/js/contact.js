import Address from "../img/adresa.png";
export function createContactSection() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    const phone = document.createElement("p");
    phone.innerText = "☎️ 123 456 789";
    phone.classList.add("contact-paragraph");
    const address = document.createElement("p");
    address.innerText = "Strada Teodor Mihali 58-60, Cluj-Napoca";
    address.classList.add("contact-paragraph");
    const addressPhoto = new Image();
    addressPhoto.src = Address;
    addressPhoto.classList.add("contact-img");
    contact.appendChild(phone);
    contact.appendChild(address);
    contact.appendChild(addressPhoto);
    return contact;
}