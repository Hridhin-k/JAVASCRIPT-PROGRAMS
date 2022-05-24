function subs() {
    let n = document.getElementById("num").value;
    let str = document.getElementById("string").value;
    let newstr = "";
    ln = str.length;
    for (let i = 0; i < ln; i++) {
        if (i !== parseInt(n))
            newstr = newstr + str[i];
    }
    document.getElementById("demo").innerHTML = newstr;
}