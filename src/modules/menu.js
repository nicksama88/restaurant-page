// render menu content

const renderMenu = (menuList) => {
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute("class", 'info-container');
    let h1 = document.createElement('h2');
    h1.textContent = "MENU";
    mainDiv.appendChild(h1);

    // create items from menuList
    for (let i = 0; i < menuList.length; i++) {

        let sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');
        let h = document.createElement('h3');
        h.classList.add('menu-section-title')
        h.textContent = menuList[i].name;
        sectionDiv.appendChild(h);

        for (let j = 0; j < menuList[i].items.length; j++) {

            let itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            let itemName = document.createElement('span');
            itemName.classList.add('menu-item-name');
            itemName.textContent = menuList[i].items[j].item;
            let itemPrice = document.createElement('span');
            itemPrice.classList.add('menu-item-price');
            itemPrice.textContent = menuList[i].items[j].price;
            let itemDesc = document.createElement('p');
            itemDesc.classList.add('menu-item-desc');
            itemDesc.textContent = menuList[i].items[j].desc;
            itemDiv.append(itemName, itemPrice, itemDesc);
            sectionDiv.appendChild(itemDiv);

        }

        mainDiv.appendChild(sectionDiv);

    }

    return mainDiv;
}

export default renderMenu