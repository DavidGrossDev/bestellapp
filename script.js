let basketArray = [];

function init() {
    renderAllDishes();
    renderBasket();
}

function renderAllDishes() {
    renderDishes("pizzas");
    renderDishes("noodles");
    renderDishes("salads");
}

function renderDishes(section) {
    let contentRef = document.getElementById(`content_${section}`);
    contentRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < dishes[section].length; indexDishes++) {
        contentRef.innerHTML += getDishesTemplate(section, indexDishes);
    }
}

function addToBasket(section, indexDishes) {

    if ((basketArray.indexOf(dishes[section][indexDishes])) < 0) {
        basketArray.push(dishes[section][indexDishes]);
    }
    renderBasket();
}

function renderBasket() {
    let contentBasketRef = document.getElementById('content_basket_items');
    contentBasketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < basketArray.length; indexBasket++) {
        contentBasketRef.innerHTML += getBasketTemplate(indexBasket);
    }

    renderPrice();
}

function subtract(indexBasket) {
    let priceSub = basketArray[indexBasket].price;
    let multiply = basketArray[indexBasket].multiplicator;
    priceSub = priceSub / multiply;

    multiply--;

    if (multiply > 0) {
        basketArray[indexBasket].price = priceSub * multiply;
        basketArray[indexBasket].multiplicator = multiply;
    }
    renderBasket();
}

function addition(indexBasket) {
    let priceAdd = basketArray[indexBasket].price;
    let multiply = basketArray[indexBasket].multiplicator;
    priceAdd = priceAdd / multiply;

    multiply++;

    basketArray[indexBasket].price = priceAdd * multiply;
    basketArray[indexBasket].multiplicator = multiply;

    renderBasket();
}


function deleteItem(indexBasket) {
    basketArray[indexBasket].price = basketArray[indexBasket].price / basketArray[indexBasket].multiplicator;
    basketArray[indexBasket].multiplicator = 1;
    basketArray.splice(indexBasket, 1);

    renderBasket();
}

function renderPrice(){
    let pricesRef = document.getElementById('prices');
    pricesRef.innerHTML = "";
    let price = 0;
    let complete = 0;

    for (let indexPrices = 0; indexPrices < basketArray.length; indexPrices++) {
        price += basketArray[indexPrices].price ;

        complete = price + 5;

        pricesRef.innerHTML = getPricesTemplate(price, complete);

        if (gesamt = 0){
            gesamt = 1.00;
            price = 1.00;
            pricesRef.innerHTML = getPricesTemplate(price, complete);
        }

    }
}