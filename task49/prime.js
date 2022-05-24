function prime() {
    let n = document.getElementById("num").value; let arr = [];
    for (let i = 2; i <= n; i++) {

        let flag = true;


        for (let j = 2; j < i; j++) {
            if (i % j === 0 && i !== j) {
                flag = false;
            }
        }
        if (flag === true) {
            arr.push(i);
            //console.log(arr);
            console.log(i);
        }
    } console.log(arr);
} 