// Import modules
import renderHeader from './modules/header'
import renderMain from './modules/main'
import renderHome from './modules/home'
import renderAbout from './modules/about'

// Import CSS
import './assets/CSS/style.css'

// build initial header and page
const content = document.getElementById('content');
content.appendChild(renderHeader());
content.appendChild(renderMain())

// insert home content to start
const mainContent = document.getElementById('main-content');
mainContent.appendChild(renderHome());

// function to clear all children from main content div
const clearMain = () => {
    while (mainContent.firstChild !== null) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

// clearMain();
// mainContent.appendChild(renderAbout())