function check() {
    let a = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    let f = true;

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (a[i][j] !== 1 && i === j || a[i][j] && i !== j) {


                f = false
            }

        }
    }

    console.log(f ? "unit matrix" : "not a unit matrix");

}

