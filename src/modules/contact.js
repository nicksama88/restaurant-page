// render contact content

const renderContact = () => {
    const div = document.createElement('div')
    div.setAttribute("class", 'info-container');
    div.textContent = "Contact Info";
    return div;
}

export default renderContact