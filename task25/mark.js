function mark() {
    let m = document.getElementById("num").value;
    if (m > 89 && m <= 100) {
        console.log("A+");

    } else if (m > 79 && m <= 89) {
        console.log("A");
    }
    else if (m > 69 && m <= 79) {
        console.log("B");
    }
    else if (m > 59 && m <= 69) {
        console.log("C");
    }
    else {
        console.log("fail");
    }
}