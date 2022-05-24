function concat() {
    let str = document.getElementById("string").value;
    let ln = str.length;
    if (ln >= 3) {
        let newstr = str.slice(ln - 3, ln);
        console.log(newstr);
        let newstr1 = newstr + str + newstr;



        document.getElementById("demo").innerHTML = newstr1;
    }
    else {
        document.getElementById("demo1").innerHTML = "STRING MUST HAVE ATLEAST 3 CHARACTERS";
    }
}

