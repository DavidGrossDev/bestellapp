let basketArray = [];

function init() {
    getBasketFromLocalStorage();
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
        dishes[section][indexDishes].price = dishes[section][indexDishes].price / dishes[section][indexDishes].multiplicator;
        dishes[section][indexDishes].multiplicator = 1;
        basketArray.push(dishes[section][indexDishes]);
        document.getElementById('deliver').innerHTML = "";
    }

    saveBasketToLocalStorage();
    renderBasket();
}

function saveBasketToLocalStorage() {
    localStorage.setItem("basket", JSON.stringify(basketArray));
}

function getBasketFromLocalStorage() {
    let loadedBasket = JSON.parse(localStorage.getItem("basket"));

    if (loadedBasket != null) {
        basketArray = loadedBasket;
    }
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
    saveBasketToLocalStorage();
    renderBasket();
}

function addition(indexBasket) {
    let priceAdd = basketArray[indexBasket].price;
    let multiply = basketArray[indexBasket].multiplicator;
    priceAdd = priceAdd / multiply;

    multiply++;

    basketArray[indexBasket].price = priceAdd * multiply;
    basketArray[indexBasket].multiplicator = multiply;

    saveBasketToLocalStorage();
    renderBasket();
}

function deleteItem(indexBasket) {
    basketArray[indexBasket].price = basketArray[indexBasket].price / basketArray[indexBasket].multiplicator;
    basketArray[indexBasket].multiplicator = 1;
    basketArray.splice(indexBasket, 1);

    saveBasketToLocalStorage();
    renderBasket();
}

function renderPrice() {
    let pricesRef = document.getElementById('prices');
    pricesRef.innerHTML = "";
    let price = 0;
    let complete = 0;

    for (let indexPrices = 0; indexPrices < basketArray.length; indexPrices++) {
        price += basketArray[indexPrices].price;

        complete = price + 5;

        pricesRef.innerHTML = getPricesTemplate(price, complete);
    }
}

function buyChoises() {
    deliverContentRef = document.getElementById('deliver');
    deliverContentRef.innerHTML = getDeliverTemplate();

    let newBasket = [];
    basketArray = newBasket;
    saveBasketToLocalStorage();
    renderBasket();
}

function openBasketMobile() {
    let sidebar = document.getElementById('aside');
    let main = document.getElementById('section');
    let basketCard = document.getElementById('basket_card');

    sidebar.style.display = "block";
    sidebar.style.width = "100%";
    main.style.display = "none";
    basketCard.style.height = "100vh";
}

function closeBasketMobile() {
    location.reload()
}