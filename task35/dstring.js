function ds() {
    let n1 = document.getElementById("num").value;
    let n2 = document.getElementById("num1").value;
    let dn = n1 / n2;
    let str = dn.toLocaleString("en-US");


    console.log(str + str);
    document.getElementById("demo").innerHTML = str;
}