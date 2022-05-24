function rev() {
    let str = document.getElementById("string").value;
    let ln = str.length;
    console.log(ln);
    let strnew = "";
    for (let i = ln - 1; i >= 0; i--) {
        strnew = strnew + str[i];
    }
    document.getElementById("demo").innerHTML = strnew;
}