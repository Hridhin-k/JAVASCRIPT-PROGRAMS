function java() {
    let str = document.getElementById("string").value;
    let ln = str.length;

    let newstr = str.slice(0, 4);
    console.log(newstr);
    if ((newstr == "java") || (newstr == "JAVA")) {
        document.getElementById("demo").innerHTML = "TRUE";
    }

    else {
        document.getElementById("demo").innerHTML = "FALSE"
    }


}

