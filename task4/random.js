

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ln = list.length;
function random() {
    let index = Math.floor(Math.random() * ln);
    //let index = Math.random() * ln;
    let ranum = list[index];

    inpnum = document.getElementById("num").value;

    if (inpnum == ranum) {
        console.log("congrats the number " + inpnum + " is a match");
    }
    else {
        console.log("better luck next time the random number is " + ranum);

    }
}
