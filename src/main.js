// render main content

const renderMain = () => {
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');
    mainContent.textContent = "main content will go here";
    return mainContent;
}
    
export default renderMain;