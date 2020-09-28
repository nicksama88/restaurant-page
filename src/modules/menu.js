// render menu content

const renderMenu = () => {
    const div = document.createElement('div')
    div.setAttribute("class", 'info-container');
    div.textContent = "Menu Info";
    return div;
}

export default renderMenu