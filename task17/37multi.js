function check() {
    let n = document.getElementById("num").value;
    if (n > 0) {
        if ((n % 3 == 0) && (n % 7 == 0)) {
            console.log("true");
            document.getElementById("demo").innerHTML = "TRUE the number is a multiple of 3 and 7 ";

        }
        else {
            console.log("false");
            document.getElementById("demo").innerHTML = "FALSE";
        }
    }
    else {
        alert("wrong input");
    }
}