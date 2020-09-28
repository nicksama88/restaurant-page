// render about content

const renderAbout = () => {
    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute("class", 'info-container');
    const aH1 = document.createElement("h2");
    const aH2 = document.createElement("h3");
    const aP = document.createElement("p");
    aH1.textContent = 'Irrasshaimase!';
    aH2.textContent = 'Welcome!';
    aP.textContent = "We are a small family run business, with the goal of bringing the joy of Japanese cuisine to the lives of those in our community.";
    aboutDiv.append(aH1, aH2, aP);
    return aboutDiv;
}

export default renderAbout