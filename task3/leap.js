function leap() {
    let year = document.getElementById("num").value;
    if (year % 4 !== 0) {
        console.log("the year " + year + "is not a leap year");
    }
    else {
        console.log("the year " + year + "is a leap year");
    }
}
