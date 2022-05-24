function check() {
    let n = document.getElementById("num").value;
    let cn = n - 13;
    if (n > 13) {
        cn = cn * 2;
        document.getElementById("demo").innerHTML = "Double of the absolute diffrence is " + cn;
    }
    else {
        document.getElementById("demo").innerHTML = "absolute diffrence is " + cn;
    }
}