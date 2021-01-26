// rendering page header

const renderHeader = () => {
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'header-container');

    const title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.textContent = "Nick's Izakaya";

    const navBar = document.createElement('ul');
    navBar.setAttribute('id', 'nav-bar');

    // creating menu options
    let nameList = ['home', 'menu', 'about', 'contact']
    nameList.map( element => {
        let li = document.createElement('li');
        li.textContent = element;
        li.setAttribute('id', element);
        navBar.appendChild(li);
    });

    headerContainer.appendChild(title);
    headerContainer.appendChild(navBar);
    return headerContainer;
}

export default renderHeader