function half() {
    let str = document.getElementById("string").value;
    let ln = str.length;
    console.log(ln);
    if (ln % 2 == 0) {
        let newstr = str.slice(0, (ln / 2))
        console.log(newstr);
        document.getElementById("demo").innerHTML = newstr;
    }

    else {
        alert("the string " + str + " has odd length of letters");
    }
}

