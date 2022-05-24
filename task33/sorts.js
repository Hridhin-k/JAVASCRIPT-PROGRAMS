function sort() {
    let str = document.getElementById("string").value;
    let star = str.split('');
    console.log(star);
    let newstr = star.sort();
    let fin = newstr.join('');
    document.getElementById("demo").innerHTML = fin;

}