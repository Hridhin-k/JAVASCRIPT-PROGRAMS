function mo() {
    let nn = document.getElementById("num").value;
    let n = parseInt(nn);
    let sum = 0;
    let count = 0;
    let i = 0;
    let s = n.toString();
    let sl = s.length;

    while ((n > 0) || (sum > 9)) {
        if (n == 0) {
            n = sum;
            sum = 0
        }
        sum = sum + parseInt(n % 10);
        n = parseInt(n / 10);

        i++;
        if (i === sl) {
            count++;
            s = sum.toString();
            sl = s.length;
            i = 0;
        }
    }
    //count++;
    console.log("the sum of the digits is " + sum);
    console.log(count);
}