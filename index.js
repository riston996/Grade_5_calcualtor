console.log("js is loaded");
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
    let sum = num1 + num2;
    let ans = document.getElementById("sum-el");
    ans.innerText = "Sum:" + " " + sum;
}

function subtract() {
    let sum = num1 - num2;
    let ans = document.getElementById("sum-el");
    ans.innerText = "Sum:" + " " + sum;
}

function divide() {
    let sum = num1 / num2;
    let ans = document.getElementById("sum-el");
    ans.innerText = "Sum:" + " " + sum;
}

function multiply() {
    let sum = num1 * num2;
    let ans = document.getElementById("sum-el");
    ans.innerText = "Sum:" + " " + sum;
}

function next() {
    num1 = Math.floor(Math.random() * 20) + 1; // Random integer between 1 and 20
    num2 = Math.floor(Math.random() * 20) + 1; // Random integer between 1 and 20
    document.getElementById("num1-el").textContent = num1
    document.getElementById("num2-el").textContent = num2
    let ans = document.getElementById("sum-el");
    ans.innerText = "Sum:";
    changeBackground();
}

function changeBackground() {
    // Array of image URLs
    const images = [
        'url("https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/tree-bark-nature-texture-6.jpg")',
        'url("https://img.freepik.com/free-photo/beige-dried-leaf-pattern-wallpaper_53876-94651.jpg")',
        'url("https://lh3.googleusercontent.com/proxy/IohxVEBKU9rkPubwnDxhLdJV0HmUbZWJ0w52mrnv5fYWpsW_F_wnYlWYoZa6VaPFmGHr8WQklatXFUHlCBWPwnTO0mYhXJi3QOAjutH_ZMv1Fw")',
        'url("https://i.pinimg.com/originals/b5/df/2a/b5df2adcd978bf0ff7aa6f4b8a7b9f52.jpg")',
        'url("https://g3.img-dpreview.com/B7B8A5ABFA9D4A8A85F15EE817F11862.jpg")',
        'url("https://img.freepik.com/free-photo/green-leaf-texture-leaf-texture-background_501050-120.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700524800&semt=ais")',
        'url("https://img.freepik.com/premium-photo/tropical-leaves-abstract-green-leaves-texture-nature-background_512343-1135.jpg")',
        'url("https://img.freepik.com/free-vector/large-tropical-green-leaves-background_52683-36490.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705363200&semt=ais")',
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    let calcElement = document.querySelector(".calc");
    calcElement.style.backgroundImage = images[randomIndex];
}