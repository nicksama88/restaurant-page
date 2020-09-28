// Import modules
import renderHeader from './modules/header'
import renderMain from './modules/main'
import renderHome from './modules/home'
import renderAbout from './modules/about'
import renderContact from './modules/contact'
import renderMenu from './modules/menu'

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

// function to clear tab selection
const clearTabSelection = () => {
    let tabs = document.querySelectorAll('li');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("selected");
    };
};

const navBarTabs = document.querySelector('#nav-bar').children;

// add eventListeners for all tabs, for loading new pages and highlighting choice
for (let i = 0; i < navBarTabs.length; i++) {
    let tab = navBarTabs[i];
    tab.addEventListener('click', (event) => {
        clearMain();
        clearTabSelection();

        let text = tab.textContent;
        let selection = document.querySelector("#" + text);
        selection.classList.add("selected");

        switch(text) {

            case 'home':
                mainContent.appendChild(renderHome());
                break;
            
            case 'menu':
                mainContent.appendChild(renderMenu());
                break;
            
            case 'about':
                mainContent.appendChild(renderAbout());
                break;
            
            case 'contact':
                mainContent.appendChild(renderContact());
                break;
            
            default:
                console.log("Something went wrong in tab switch statement");
        };
    });
};
