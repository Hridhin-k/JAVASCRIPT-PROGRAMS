function kar() {
    let data = document.getElementById("num").value;
    let arr = String(data).split("");
    let l = arr.length;
    let arrn = arr.sort(function (a, b) {
        return a - b
    });
    let ln = arrn.length;

    console.log(arrn);
    document.getElementById('demo').innerHTML = "the largest number in the array is " + arrn[ln - 1];
}