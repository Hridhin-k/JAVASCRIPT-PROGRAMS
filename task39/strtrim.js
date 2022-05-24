function trimst() {
    let str1 = document.getElementById("string").value;
    let str2 = document.getElementById("string1").value;
    let ln1 = str1.length;
    let ln2 = str2.length;
    let l1 = ln1;
    let l2 = ln2;
    if (ln1 > ln2) {
        let newstr1 = str1.slice(0, l2);
        console.log(newstr1);
        document.getElementById("demo").innerHTML = newstr1 + str2;
    }
    else if (ln2 > ln1) {
        let newstr2 = str2.slice(0, l1);
        console.log(newstr2);
        document.getElementById("demo").innerHTML = str1 + newstr2;
    }
    else {
        console.log(str1 + str2);
        document.getElementById("demo").innerHTML = str1 + str2;
    }
}