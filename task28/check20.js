function check() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let n3 = document.getElementById("num3").value;

    if ((n1 >= 20) && ((n1 < n2) || (n1 < n3))) {
        document.getElementById("demo").innerHTML = "the first number is greater than or equal to 20 and is less than second  or third number";

    }

    else if ((n2 >= 20) && ((n2 < n1) || (n2 < n3))) {
        document.getElementById("demo").innerHTML = "the second number is greater than or equal to 20 and is less than first  or third number";
    }
    else if ((n3 >= 20) && ((n3 < n2) || (n3 < n1))) {
        document.getElementById("demo").innerHTML = "the third number is greater than or equal to 20 and is less than second  or first number";
    }
    else {

        document.getElementById("demo").innerHTML = "none of the number entered is greater than 20";

    }
}
