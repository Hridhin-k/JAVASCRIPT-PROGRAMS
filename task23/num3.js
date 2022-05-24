function check() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let n3 = document.getElementById("num3").value;
    let sn1 = String(n1);
    let sn2 = String(n2);
    let sn3 = String(n3);

    if ((sn1.slice(-1) == sn2.slice(-1)) && (sn2.slice(-1) == sn3.slice(-1)) && (sn1.slice(-1) == sn3.slice(-1))) {
        document.getElementById("demo").innerHTML = "yes the last digits of all the three numbers are same"
    }
    else {
        document.getElementById("demo").innerHTML = "No the last digits of all the three numbers are not same"
    }
}
