function rev() {
    let string = document.getElementById("text").value;

    let ln = string.length;
    let revstr = "";
    //let str = string;
    for (let i = ln - 1; i >= 0; i--) {
        revstr = revstr + string[i];
    }
    console.log("the reversed string is " + revstr);
}
