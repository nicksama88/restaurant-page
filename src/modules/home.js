// render home content
import natto from "../assets/images/natto.jpg"

const renderHome = () => {
    let homeContainer = document.createElement('div');
    homeContainer.setAttribute("class", 'info-container');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img = document.createElement('img');
    p1.textContent = 'Serving authentic and traditional Japanese cuisine, along with new contemporary favorites.';
    p2.textContent = "You know we are legitimate because we serve natto!";
    img.src = natto;
    img.id = 'img-natto';
    p3.appendChild(img);
    homeContainer.append(p1, p2, p3);
    return homeContainer;
};

export default renderHome