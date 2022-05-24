function extension() {
    let str = document.getElementById("string").value;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ".") {
            let u = i;
            let newstr = str.slice(u, str.length);

            document.getElementById("demo").innerHTML = newstr;
        }
    }
}