function div() {
    let arr = [25, 6, 85, 36, 2, 9, 45, 75, 94, 25, 66, 88, 23, 21, 57];
    let l1 = arr.length;
    let newar1 = [];
    let newar2 = [];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < l1; i++) {
        if (i % 2 == 0) {
            newar1.push(arr[i]);
            sum1 = sum1 + arr[i]
            // console.log(newar1);
        }
        else {
            newar2.push(arr[i]);
            sum2 = sum2 + arr[i];
            // console.log(newar2);
        }
    }

    console.log(newar1);
    console.log(newar2);
    console.log(sum1);
    console.log(sum2);
    document.getElementById("demo2").innerHTML = sum1;
    document.getElementById("demo3").innerHTML = sum2;
    document.getElementById("demo").innerHTML = newar1;
    document.getElementById("demo1").innerHTML = newar2;
    let array = [sum1, sum2];
    console.log(array);
    document.getElementById("demo4").innerHTML = array;


}