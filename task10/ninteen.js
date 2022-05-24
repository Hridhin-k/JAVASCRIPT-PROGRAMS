function check() {
    let n = document.getElementById("num").value;
    let cn = n - 19;
    if (n > 19) {
        cn = cn * 3;
        document.getElementById("demo").innerHTML = "triple of the absolute diffrence is " + cn;
    }
    else {
        document.getElementById("demo").innerHTML = "absolute diffrence is " + cn;
    }
}