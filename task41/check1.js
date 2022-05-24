function check() {
    let data = document.getElementById("num").value;
    let arr = String(data).split("");
    let l = arr.length;
    if (l >= 2) {
        console.log(arr);
        if ((arr[0] == 1) || (arr[l - 1] == 1)) {
            console.log("yes");
            document.getElementById("demo").innerHTML = "the number one is present at first or last position ";
        }
        else {
            document.getElementById("demo").innerHTML = "the number one is not present at first or last position ";
        }

    }
    else {
        alert("the length is too short");
    }
}