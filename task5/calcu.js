
//let n1 = document.getElementById("num1").value;
//let n2 = document.getElementById("num2").value;
function add() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let sum = parseInt(n1) + parseInt(n2);

    document.getElementById("demo").innerHTML = "the sum of the given number is :" + sum;
}
function subs() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let sub = n1 - n2;

    document.getElementById("demo").innerHTML = "the diffrents of the given number is :" + sub;
}
function product() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let product = n1 * n2;

    document.getElementById("demo").innerHTML = "the product of the given number is :" + product;
}
function divide() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let divide = n1 / n2;

    document.getElementById("demo").innerHTML = "the reminder of the given number is :" + divide;
}
function mode() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let mode = n1 % n2;

    document.getElementById("demo").innerHTML = "the mode of the given number is :" + mode;
}
function root() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let root1 = Math.sqrt(n1);
    let root2 = Math.sqrt(n2);

    document.getElementById("demo").innerHTML = "the root of the first number is :" + root1;
    document.getElementById("demo1").innerHTML = "the root of the second number is :" + root2;
}