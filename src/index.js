// Import modules
import renderHeader from './header'
import renderMain from './main'

// Import CSS
import './assets/CSS/style.css'

const content = document.getElementById('content');
content.appendChild(renderHeader());
content.appendChild(renderMain())