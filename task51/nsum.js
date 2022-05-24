function sum() {
    let n = document.getElementById("num").value;
    let sum = 0;
    let i;

    for (i = 2; i <= n; i = i * 2) {
        sum = sum + (n / i);
        console.log(sum);
    }

    console.log(n + sum);
}