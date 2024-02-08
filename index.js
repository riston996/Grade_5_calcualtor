console.log("js is loaded");
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let ans1 = num1 + num2;
let ans2 = ans1 + Math.floor(Math.random() * 5);
let ans3 = ans1 - Math.floor(Math.random() * 5);
let ans4 = Math.floor(Math.random() * 20);
assign_cards();

function assign_cards(){
    if (ans1 === ans2) {
        ans2 = ans1 + Math.floor(Math.random() * 5 + 1) ;
    }
    if (ans1 === ans3) {
        ans3 = ans1 - Math.floor(Math.random() * 5 + 1);
    }
    
    if (ans1 === ans4) {
        ans4 = Math.floor(Math.random() * 20);
    }
    
    if (ans2 === ans3 || ans3 === ans4) {
        ans3 = ans1 - Math.floor(Math.random() * 5 + 1);
        if (ans1 === ans3) {
            ans3 = ans1 - Math.floor(Math.random() * 5 + 1);
        }
    }
    
    if (ans3 === ans4) {
        ans4 = Math.floor(Math.random() * 20 + 1);
        if (ans1 === ans4) {
            ans4 = Math.floor(Math.random() * 20 + 1);
        }
    }
    
    let k = Math.floor(Math.random()*4 + 1);
    
    if (k === 1) {
        document.getElementById("ans1").textContent = ans1;
        document.getElementById("ans2").textContent = ans2;
        document.getElementById("ans3").textContent = ans3;
        document.getElementById("ans4").textContent = ans4;
    } else if (k === 2) {
        document.getElementById("ans1").textContent = ans2;
        document.getElementById("ans2").textContent = ans1;
        document.getElementById("ans3").textContent = ans3;
        document.getElementById("ans4").textContent = ans4;
    } else if (k === 3) {
        document.getElementById("ans1").textContent = ans2;
        document.getElementById("ans2").textContent = ans3;
        document.getElementById("ans3").textContent = ans1;
        document.getElementById("ans4").textContent = ans4;
    } else {
        document.getElementById("ans1").textContent = ans2;
        document.getElementById("ans2").textContent = ans3;
        document.getElementById("ans3").textContent = ans4;
        document.getElementById("ans4").textContent = ans1; 
    }
}






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
    ans1 = num1 + num2;
    ans2 = ans1 + Math.floor(Math.random() * 5);
    ans3 = ans1 - Math.floor(Math.random() * 5);
    ans4 = Math.floor(Math.random() * 20) + 1;
    assign_cards();
}
