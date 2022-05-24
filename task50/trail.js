function trail() {
    let n = document.getElementById("num").value;
    var result = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }

    console.log(result);
}

