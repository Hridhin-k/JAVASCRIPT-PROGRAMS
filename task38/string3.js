function three() {
    let str = document.getElementById("string").value;

    let ln = str.length;
    if (ln >= 3) {
        let str1 = str.substring(ln - 3, ln);
        console.log(str1);
        let newstr = str1 + str;
        console.log(newstr);
        document.getElementById("demo").innerHTML = newstr;
    }
    else {
        alert("the string is very short");
    }

}
