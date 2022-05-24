function checkmax() {
    //let data = document.getElementById("num").value;
    // let arr = String(data).split("");
    let arr = [555, 62, 8, 8555, 25, 3666];
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[0] > arr[l - 1]) {
            arr[i] = arr[0];
            console.log(arr[i]);
        }
        else if (arr[l - 1] > arr[0]) {
            arr[i] = arr[l - 1];
            console.log(arr[i]);
        }
        else {
            arr[i] = arr[0];
            console.log(arr[i]);
        }

    }
    console.log(arr);
}