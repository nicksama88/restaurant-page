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
                mainContent.appendChild(renderMenu(menuList));
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

// create menu items to be used in renderMenu
const MenuItem = (item, price, desc) => {
    return {item, price, desc}
}

const MenuCategory = (name, items) => {
    return {name, items};
}


let menuList = [
    MenuCategory('Appetizers', [
        MenuItem('Agedashi Tofu', 5.95, 'Deep fried tofu served in tempura sauce, garnished with bonito flakes and green onions'),
        MenuItem('Calimari', 7.95, 'Lightly battered and fried squid, served with citris aoli'),
        MenuItem('Deep-Fried Oysters', 5.95, 'panko-breaded deep-fried oysters')
    ]),
    MenuCategory('Salads', [
        MenuItem('Sunomono', 6.50, 'Pickled cucumber and wakame seaweed salad'),
        MenuItem('Seaweed Salad', 5.95, 'Seaweed in seasame oil along with other seasonings, topped with sesame seeds'),
        MenuItem('House Salad', 5.95, 'Mixed greens accompained by a miso-sesame dressing')
    ]),
    MenuCategory('Entrees', [
        MenuItem('Teriyaki Salmon', 11.95, 'Broiled salmon with teriyaki sauce. Includes miso soup and rice'),
        MenuItem('Tonkatsu', 11.95, 'Panko-breaded and deep-fried pork cutlet with katsu sauce. Includes miso soup and rice'),
        MenuItem('Tofu Stir-Fry', 9.95, 'Fried tofu stir-fried with mixed vegetables. Includes miso soup and white rice ')
    ]),
    MenuCategory('Rolls', [
        MenuItem('California Roll', 5.95, 'Imitation crab, avocado, cucumber, tobiko, mayo'),
        MenuItem('Caterpillar Roll', 12.95, 'Eel roll covered with avocado, tobiko and unagi sauce'),
        MenuItem('Spicy Tuna Roll', 5.95, 'Spicy!!! minced tuna, sriracha and chili oil')
    ])
];
