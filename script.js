let basketArray = [];

function init() {
    renderDishes("pizzas");
    renderDishes("noodles");
    renderDishes("salads");
    renderBasket();
}


function renderDishes(section) {
    let contentRef = document.getElementById(`content_${section}`);
    contentRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < dishes[section].length; indexDishes++) {
        contentRef.innerHTML += getDishesTemplate(section, indexDishes);
    }
}

function addToBasket(section,indexDishes) {
    basketArray.push(dishes[section][indexDishes]);
    renderBasket();
}

function renderBasket() {
    let contentBasketRef = document.getElementById('content_basket_items');
    contentBasketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < basketArray.length; indexBasket++) {
        contentBasketRef.innerHTML += getBasketTemplate(indexBasket);
    }
}

 function subtract(indexBasket) {
     let newNumber = document.getElementById(`'multiply${indexBasket}'`);
    //  newNumber --;

     console.log(newNumber);
     
 }

function deleteItem(indexBasket) {
    basketArray.splice(indexBasket,1);
    renderBasket();
}