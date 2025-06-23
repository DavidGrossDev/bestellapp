function getDishesTemplate(section, indexDishes) {
    return `<div class="presentation_plate">
                    <div class="description">
                        <h3>${dishes[section][indexDishes].name}</h3>
                        <p>${dishes[section][indexDishes].description}</p>
                        <p>${dishes[section][indexDishes].price.toFixed(2)} €</p>
                    </div>
                    <button onclick="addToBasket('${section}',${indexDishes})" class="add">
                        <img src="./assets/icons/add.png" alt="">
                    </button>
                </div>`
}

function getBasketTemplate(indexBasket) {
    return `<div class="basket_item">
                       <h4>${basketArray[indexBasket].name}</h4>
                        <div class="item_price">
                            <span>
                            <button onclick="subtract(${indexBasket})"><img src="./assets/icons/minus.png" alt=""></button>
                            <p id="multiply${indexBasket}">1</p>
                            <button><img src="./assets/icons/plus.png" alt=""></button>
                            </span>
                            <p>${basketArray[indexBasket].price.toFixed(2)} €</p>
                            <button onclick="deleteItem(${indexBasket})"><img src="./assets/icons/trashcan.png" alt=""></button>
                        </div>
                     </div>` 
}


