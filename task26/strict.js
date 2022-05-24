function strict() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let n3 = document.getElementById("num3").value;
    if ((n2 > n1) && (n3 > n2)) {
        document.getElementById("demo").innerHTML = "THE NUMBERS ARE IN STRICT MODE"
    }
    else {
        document.getElementById("demo").innerHTML = "THE NUMBERS ARE NOT IN STRICT MODE"
    }
}
