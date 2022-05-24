function check() {
    let i, j;
    let isT = true;
    let a = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    for (i = 0; i < 3; i++) {
        for (j = i + 1; j < 3; j++) {
            if (a[i][j] != 0) {
                isT = false;
            }
        }


    }
    console.log(isT ? "triangular" : 'not triangular');
}