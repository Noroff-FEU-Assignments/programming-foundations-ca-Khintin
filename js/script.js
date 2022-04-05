// question 1
let outOfStock = true;

if (outOfStock) {
    console.log("Out of Stock");
}
else {
    console.log("In Stock");
}

// question 2
for (let i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

// question 3
let gameList = document.querySelector(".games");

var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

for (let i = 0; i < games.length; i++) {
    const game = games[i];
    if (game.rating && game.rating < 3.5) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${game.title}: ${game.rating}`;
        gameList.appendChild(listItem);
    }
}

// question 4
function whatIDontLike(dislike) {
    if (typeof dislike == "string") {
        console.log("I don't like " + dislike);
    }
    else {
        console.log("Please send in a string");
    }
}

whatIDontLike("Pizza");
whatIDontLike(10);
whatIDontLike(false);
whatIDontLike(null);

// question 5
function subtract(x, y) {
    let firstNumber = parseInt(x);
    let secondNumber = parseInt(y);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Invalid argument(s)";
    }

    return x - y;
}

let subtraction = document.querySelector("#subtraction");
subtraction.innerHTML = subtract(1, 42);

// question 6
let button = document.querySelector(".page");

button.onclick = function () {
    let title = document.querySelector("title");
    title.innerText = "Update title";
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
    let heading = document.querySelector("h1");
    heading.style.color = "green";
    heading.style.fontStyle = "Impact";
    heading.innerHTML = "<a href='#'>Programming Foundations Course Assignment</a>";
    let list = document.querySelector("ul");
    list.style.listStyle = "none";
    list.style.padding = "0";
}

// question 7
let buttonPrice = document.querySelector(".price");

var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];

buttonPrice.onclick = function () {

    let total = 0;

    for (let i = 0; i < toys.length; i++) {
        let toyPrice = parseFloat(toys[i].price);

        if (!isNaN(toyPrice)) {
            total += toyPrice;
        }
    }

    let priceTotal = document.querySelector("#total");
    priceTotal.innerHTML = total;
}
