function script() {
    let str = document.getElementById("string").value;
    let ln = str.length;
    let str1 = str;
    let newstr = str.slice(4, 10);
    console.log(newstr);
    if ((newstr == "script") || (newstr == "SCRIPT")) {
        newstr1 = str1.replace(newstr, "");

        document.getElementById("demo").innerHTML = newstr1;

    }
    else {
        document.getElementById("demo").innerHTML = str1;

    }
}