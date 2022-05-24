function hr() {
    let n = document.getElementById("num").value;
    let hour = /**Math.floor**/(n / 60);
    let min = (n % 60);
    let time = parseInt(hour) + ":" + min;
    console.log(time);
}