function concat() {
    let str = document.getElementById("string").value;
    let start = str[0];

    let ln = str.length;
    let end = str[ln - 1]

    let newstr = str.substring(1, ln - 1);
    let newstr1 = end + newstr + start


    //let newstr1 = newstr.replace(start, newstr[ln1 - 1]);
    document.getElementById("demo1").innerHTML = newstr;
    document.getElementById("demo").innerHTML = newstr1;

}

