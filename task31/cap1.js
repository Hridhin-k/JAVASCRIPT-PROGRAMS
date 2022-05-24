function cap() {
    let str = document.getElementById("string").value;
    let arst = str.split("");
    for (let i = 0; i < arst.length; i++) {
        arst[i] = arst[i][0].toUpperCase() + arst[i].substr(1);


        console.log(arst[i]);
    }
    strnew = arst.join("");
    console.log(strnew);
    document.getElementById("demo").innerHTML = strnew;
}

