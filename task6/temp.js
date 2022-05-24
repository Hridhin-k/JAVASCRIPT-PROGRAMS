function tof() {
    let valc = document.getElementById("c").value;
    let fahren = (((9 / 5) * valc) + parseInt(32));
    document.getElementById("demo1").innerHTML = valc + "C is equal to " + fahren + "F";
}
function toc() {
    let valf = document.getElementById("f").value;
    let cels = ((5 / 9) * (valf - 32));
    document.getElementById("demo1").innerHTML = valf + "F is equal to " + cels + "C";
}