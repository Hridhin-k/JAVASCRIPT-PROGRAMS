function attach() {
    let str = document.getElementById("string").value;


    if (((str[0] == "p") || (str[0] == "P")) && ((str[1] == "y") || (str[1] == "Y"))) {
        console.log(str);
        document.getElementById("demo").innerHTML = str;
    }
    else {
        let strn = "py".concat(str);
        console.log(strn);
        document.getElementById("demo").innerHTML = strn;
    }
}