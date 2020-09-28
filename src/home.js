// render home content

const renderHome = () => {
    let homeContainer = document.createElement('div');
    homeContainer.setAttribute("class", 'info-container');
    homeContainer.textContent = "Serving authentic and traditional Japanese Cuisine, along with new contemporary favorites.  You know we are legitimate because we serve natto"
    return homeContainer;
}

export default renderHome