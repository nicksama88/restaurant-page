// render main content

const renderMain = () => {
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');
    // mainContent.style.backgroundImage = "url(./assets/images/background.jpg)";
    mainContent.textContent = "main content will go here";
    return mainContent;
}
    
export default renderMain;