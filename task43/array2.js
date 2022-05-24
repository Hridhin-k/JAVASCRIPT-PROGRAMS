function check() {
    let data = document.getElementById("num").value;
    let arr = String(data).split("");
    let l = arr.length;
    if (l == 2) {
        for (let i = 0; i < l; i++) {
            if ((arr[i] == 1) || (arr[i] == 3)) {
                document.getElementById("demo").innerHTML = "THE ARRAY CONTAIN 1 OR 3"
            }
            else {
                document.getElementById('demo').innerHTML = "THE ARRAY DOES NOT COMTAIN 1 OR3"
            }
        }
    } else {
        alert("THE LENGTH SHOULD BE TWO");
    }
}