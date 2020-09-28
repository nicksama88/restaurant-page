// render home content

const renderHome = () => {
    let homeContainer = document.createElement('div');
    homeContainer.setAttribute("class", 'info-container');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.textContent = 'Serving authentic and traditional Japanese cuisine, along with new contemporary favorites.';
    p2.textContent = "You know we are legitimate because we serve natto!";
    homeContainer.append(p1, p2);
    return homeContainer;
}

export default renderHome