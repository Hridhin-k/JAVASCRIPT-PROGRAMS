function check() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    if (n1 !== n2) {
        let sum1 = parseInt(n1) + parseInt(n2);
        document.getElementById("demo").innerHTML = "The sum of the given number is " + sum1;
    }
    else {
        sum1 = (parseInt(n1) + parseInt(n2)) * 3;
        document.getElementById("demo").innerHTML = "The tripled sum of the given number is " + sum1;
    }
}

