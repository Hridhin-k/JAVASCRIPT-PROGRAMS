function check() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let sum = parseInt(n1) + parseInt(n2);
    document.getElementById("demo").innerHTML = (n1 == 50 || n2 == 50 || sum == 50);

}

