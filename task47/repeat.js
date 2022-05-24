function repeat() {

    let arr = [1, 2, 5, 2, 6, 0, 2, 7];
    var a = 0;
    var ar2 = [];

    for (var i = 0; i < 10; i++) {
        ar2.push(0);
    }
    for (var i = 0; i < arr.length; i++) {
        ar2[arr[i] - 1]++;
        if (ar2[arr[i] - 1] > ar2[a]) {
            a = arr[i] - 1;
        }
    }
    console.log(a + 1);
}



