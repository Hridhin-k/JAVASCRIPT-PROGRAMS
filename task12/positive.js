function check() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    //let cheknum = 3;
    //let ck1 = cheknum * n1;
    //let ck2 = checknum * n2;
    if (n1 < 0 && n2 > 0) {
        console.log(n1 + "is a negative number and " + n2 + "is a positive number");
    }
    else if (n1 > 0 && n2 < 0) {
        console.log(n1 + "is a positive number and " + n2 + "is a negative number");
    }
    else {
        console.log("one of the number or both of the numbers are zero");
    }
}
