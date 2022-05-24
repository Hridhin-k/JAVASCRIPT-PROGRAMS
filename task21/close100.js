function f1() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let ck1 = 100 - n1;
    let ck2 = 100 - n2;
    if (ck1 > ck2) {
        document.getElementById("demo").innerHTML = "THE SECOND NUMBER " + n2 + " is closest to 100";
    }
    else {
        document.getElementById("demo").innerHTML = "THE FIRST NUMBER  " + n1 + " is closest to 100";
    }
}