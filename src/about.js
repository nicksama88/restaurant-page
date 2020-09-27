const content = document.createElement("section");
content.classList.add("content");
const cH1 = document.createElement("h1");
const cH2 = document.createElement('h2');
h1.textContent = "Nick's Izakaya";
h2.textContent = 'Serving authentic and traditional Japanese Cuisine, along with new contemporary favorites.  You know we are legitimate because we serve natto';

const about = document.createElement("section");
about.classList.add("about");
const aH1 = document.createElement("h1");
const aP = document.createElement("p");
aH1.textContent = 'Irashaimasu!'
aP.textContent = "We are a family run small business, with the goal of bringing the joy of Japanese cuisine to the lives of those in our community."
content.append(cH1, cH2);
about.append(aH1, aP);

const container = document.createElement("div");

const renderAbout = () => {
    container.append(content, about);
    return container;
};

export default renderAbout