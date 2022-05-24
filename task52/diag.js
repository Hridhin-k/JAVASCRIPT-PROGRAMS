function check() {
    let a = [[1, 0, 0], [0, 4, 0], [0, 0, 4]];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i !== j && a[i][j] !== 0)
                console.log("the matrix is not diagonal");
        }
        console.log("the matrix is  diagonal");
    }


}
