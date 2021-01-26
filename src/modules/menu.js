// render menu content

const renderMenu = (menuList) => {
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute("class", 'info-container');
    let h1 = document.createElement('h2');
    h1.textContent = "MENU";
    mainDiv.appendChild(h1);

    // create items from menuList
    menuList.map( element => {

        let sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');
        let h = document.createElement('h3');
        h.classList.add('menu-section-title');
        h.textContent = element.name;
        sectionDiv.appendChild(h);

        element.items.map( subElement => {

            let itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            let itemName = document.createElement('span');
            itemName.classList.add('menu-item-name');
            itemName.textContent = subElement.item;
            let itemPrice = document.createElement('span');
            itemPrice.classList.add('menu-item-price');
            itemPrice.textContent = '$' + subElement.price.toFixed(2);
            let itemDesc = document.createElement('p');
            itemDesc.classList.add('menu-item-desc');
            itemDesc.textContent = subElement.desc;
            itemDiv.append(itemName, itemPrice, itemDesc);
            sectionDiv.appendChild(itemDiv);

        });

        mainDiv.appendChild(sectionDiv);

    });

    return mainDiv;
}

export default renderMenu